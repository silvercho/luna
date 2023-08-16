package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;



import org.springframework.stereotype.Component;

import model.BoardVO;
import model.Criteria;
import util.DBManager;


@Component
public class CommunityDAO {
	final String tbl="review";
	
	
	Connection conn=null;
	PreparedStatement pstmt=null;
	ResultSet rs=null;	
	
	//�ϳ��� ���ο� �Խñ��� �Ѿ�ͼ� BD�� ����Ǵ� �޼���
		public void insertBoard(BoardVO CVO) {
			
			try {
			String sql="insert into " + tbl + "(num, writer, subject, content) values(community_seq.nextval,?,?,?)";
			
			conn = DBManager.getConnection();
			pstmt=conn.prepareStatement(sql);
			
			pstmt.setString(1, CVO.getWriter());			
			pstmt.setString(2, CVO.getSubject());			
			pstmt.setString(3, CVO.getContent());
			
			pstmt.executeUpdate();
						
			
			}catch(Exception e) {
			e.printStackTrace();
			}finally {
				DBManager.close(conn, pstmt);
			}
		}
		//����� �ԷµǴ� �ż���
		public void insertreply(BoardVO CVO) {
			
			try {//reply���̺� �ϳ� �� ������ �ҵ�
			String sql="insert into reply values(reply_seq.nextval, ?)";
			conn = DBManager.getConnection();
			pstmt=conn.prepareStatement(sql);
			//reply ���̺� : num(�� ���� ��ȣ)/reply(��� ����)/replynum(��� ��ȣ)
			//community�� �ִ� num�� reply�� �ִ� num�� group by�� �����ϱ�?
			//�ٸ� ��Ʈ�ѷ��� ������ �ϳ�
						
			pstmt.setString(1, CVO.getReply());			
			
			
			pstmt.executeQuery();
			pstmt.close();
			conn.close();
			
			
			}catch(Exception e) {
			e.printStackTrace();
			}finally {
				DBManager.close(conn, pstmt);
			}
		}
	public ArrayList<BoardVO> AllBoard(Criteria cri){
		ArrayList<BoardVO> vec=new ArrayList<>();
		int start=cri.getPageStart();
		int end=start+cri.getPerPageNum();
		
		try {
			String sql="select * from(select A.*,Rownum Rnum from(select * from community order by regdate desc)A)" + "where Rnum>? and Rnum<=?";
			
			conn=DBManager.getConnection();
			pstmt=conn.prepareStatement(sql);
			pstmt.setInt(1, start);
			pstmt.setInt(2, end);
			
			rs=pstmt.executeQuery();
			while(rs.next()) {
				BoardVO CVO=new BoardVO();
				CVO.setNum(rs.getInt(1));
				CVO.setWriter(rs.getString(2));
				CVO.setSubject(rs.getString(3));
				CVO.setReg_date(rs.getDate(4).toString());
				CVO.setReadcount(rs.getInt(5));
				CVO.setContent(rs.getString(6));
				//CVO.setReply(rs.getString(7));
				//CVO.setReplynum(rs.getInt(8));
				
				vec.add(CVO);				
			}
			
		}catch(Exception e) {
			e.printStackTrace();
		}finally {
			DBManager.close(conn, pstmt, rs);
		}
		
		return vec;
	}
	
	
	//BoardInfo �϶� : �ϳ��� �Խñ��� �����ϴ� �ż���
		public BoardVO getOneBoard(int num) {
			BoardVO CVO = new BoardVO();
			
			
			try {
				conn=DBManager.getConnection();
				//community ���̺�
				//num(�� ��ȣ) writer(�� �ۼ���), subject(�� ����), reg_date(�� �ۼ���), readcount(�� ��ȸ��), content(�� ����)
				//��Ƚ�� ���� ����
				String readsql="update board set readcount=readcount+1 where num=?";
				pstmt=conn.prepareStatement(readsql);
				pstmt.setInt(1, num);
				pstmt.executeUpdate();
				
				//�ϳ��� �Խñ� ����(BoardBean)�� DB���� ������ Ŭ������ ����
				String sql="select * from "+tbl+ " where num=?";
				pstmt=conn.prepareStatement(sql);
				pstmt.setInt(1, num);
				
				rs=pstmt.executeQuery();
				
				if(rs.next()) {
					CVO.setNum(rs.getInt(1));
					CVO.setWriter(rs.getString(2));					
					CVO.setSubject(rs.getString(3));					
					CVO.setReg_date(rs.getDate(4).toString());
					CVO.setReadcount(rs.getInt(5));
					CVO.setContent(rs.getString(6));
					//CVO.setReply(rs.getString(7));
					//CVO.setReplynum(rs.getInt(8));
				}
			}catch(Exception e) {
				e.printStackTrace();
			}
			return CVO;
		}
		
		//Boardupdate�� �ϳ��� �Խñ��� ����
		//Boardupdate�� delete�� �ϳ��� �Խñ��� ����
		public int UpdateBoard(BoardVO CVO) {		
			int result=0;
			
			try {
				String sql="update " + tbl + " set subject=? writer=? where num=?";
				
				conn=DBManager.getConnection();
				pstmt=conn.prepareStatement(sql);				
				rs=pstmt.executeQuery();
				
				pstmt.setString(1, CVO.getSubject());
				pstmt.setString(2, CVO.getWriter());
				pstmt.setInt(3, CVO.getNum());
								
				result=pstmt.executeUpdate();
			}catch(Exception e) {
				e.printStackTrace();
			}finally {
				DBManager.close(conn, pstmt);
			}return result;
			
		}
		
		public int deleteBoard(BoardVO CVO) {
				int result=0;
			
			try {
				String sql="delete " + tbl + " where num=?";
				
				conn=DBManager.getConnection();
				pstmt=conn.prepareStatement(sql);				
				
				pstmt.setInt(1, CVO.getNum());
								
				result=pstmt.executeUpdate();
			}catch(Exception e) {
				e.printStackTrace();
			}finally {
				DBManager.close(conn, pstmt);
			}return result;
			
		}
		
		//��ü���� ������ �����ϴ� �ż���
		public int getAllCount() {
			
			int count=0;
			String sql="select count(*) from" + tbl;
			try {
				conn=DBManager.getConnection();
				pstmt=conn.prepareStatement(sql);				
				rs=pstmt.executeQuery();
				if(rs.next()) {
					count=rs.getInt(1);
				}
				pstmt.close();
				conn.close();
			}catch(Exception e) {
				e.printStackTrace();
			}finally {
				DBManager.close(conn, pstmt, rs);
			}
			return count;
		}
		//�������� �˻��� �ϱ� ���� �ż���
		public BoardVO selectProductBysubject(String subject) {
			BoardVO CVO=null;
			
			
						
			try {
				String sql="select * from community where subject=?";
				pstmt=conn.prepareStatement(sql);
				
				pstmt.setString(1,subject);
				rs=pstmt.executeQuery();
				
				if(rs.next()) {
					CVO=new BoardVO();
					CVO.setNum(rs.getInt(1));
					CVO.setWriter(rs.getString(2));					
					CVO.setSubject(rs.getString(3));					
					CVO.setReg_date(rs.getDate(4).toString());
					CVO.setReadcount(rs.getInt(5));
					CVO.setContent(rs.getString(6));
				}
			}catch(Exception e) {
				e.printStackTrace();
			}
			
			return CVO;
		}
		
		
}