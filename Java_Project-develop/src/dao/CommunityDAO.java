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
	
	//하나의 새로운 게시글이 넘어와서 BD에 저장되는 메서드
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
		//댓글이 입력되는 매서드
		public void insertreply(BoardVO CVO) {
			
			try {//reply테이블 하나 더 만들어야 할듯
			String sql="insert into reply values(reply_seq.nextval, ?)";
			conn = DBManager.getConnection();
			pstmt=conn.prepareStatement(sql);
			//reply 테이블 : num(들어갈 글의 번호)/reply(댓글 내용)/replynum(댓글 번호)
			//community에 있는 num과 reply에 있는 num을 group by로 병합하기?
			//다른 컨트롤러에 만들어야 하나
						
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
	
	
	//BoardInfo 일때 : 하나의 게시글을 리턴하는 매서드
		public BoardVO getOneBoard(int num) {
			BoardVO CVO = new BoardVO();
			
			
			try {
				conn=DBManager.getConnection();
				//community 테이블
				//num(글 번호) writer(글 작성자), subject(글 제목), reg_date(글 작성일), readcount(글 조회수), content(글 내용)
				//조횟수 증가 쿼리
				String readsql="update board set readcount=readcount+1 where num=?";
				pstmt=conn.prepareStatement(readsql);
				pstmt.setInt(1, num);
				pstmt.executeUpdate();
				
				//하나의 게시글 정보(BoardBean)을 DB에서 가져와 클래스에 저장
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
		
		//Boardupdate용 하나의 게시글을 리턴
		//Boardupdate용 delete시 하나의 게시글을 리턴
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
		
		//전체글의 갯수를 리턴하는 매서드
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
		//제목으로 검색을 하기 위한 매서드
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