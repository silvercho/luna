package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

import org.springframework.stereotype.Component;

import model.Criteria;
import model.QueryVO;
import util.DBManager;

@Component
public class QueryDAO {
	final String tbl = "q_board";
	
	Connection conn=null;
	PreparedStatement pstmt=null;
	ResultSet rs=null;
	
	public void insertBoard(QueryVO qvo) {
		
		try {
			String sql="insert into " + tbl + "(bno,title,content,writer) values(q_board_seq.nextval,?,?,?)";
			conn = DBManager.getConnection();
			pstmt=conn.prepareStatement(sql);
			
			pstmt.setString(1, qvo.getTitle());
			pstmt.setString(2, qvo.getContent());
			pstmt.setString(3, qvo.getWriter());
			
			pstmt.executeUpdate();
		}catch (Exception e) {
			e.printStackTrace();
		}finally {
			DBManager.close(conn, pstmt);
		}
	}
	
	public int updateBoard(QueryVO qvo) {
		int result=0;
		
		try {
			String sql="update "+ tbl +" set title=? content=? where bno=? and writer=?";
			
			conn=DBManager.getConnection();
			pstmt=conn.prepareStatement(sql);
			
			pstmt.setString(1, qvo.getTitle());
			pstmt.setString(2, qvo.getContent());
			pstmt.setInt(3, qvo.getBno());
			pstmt.setString(4, qvo.getWriter());
			
			result=pstmt.executeUpdate();
		}catch(Exception e) {
			e.printStackTrace();
		}finally {
			DBManager.close(conn, pstmt);
		}
		
		return result;
		
	}
	
	public int deleteBoard(int bno, String writer) {
		int result=0;
		
		try {
			String sql="delete "+ tbl +" where bno=? and writer=?";
			
			conn=DBManager.getConnection();
			pstmt=conn.prepareStatement(sql);
			
			pstmt.setInt(1, bno);
			pstmt.setString(2, writer);
			
			result=pstmt.executeUpdate();
		}catch(Exception e) {
			e.printStackTrace();
		}finally {
			DBManager.close(conn, pstmt);
		}
		
		return result;
	}
	
	public QueryVO oneQuery(int bno, String writer) {
		QueryVO qvo=new QueryVO();
		
		try {
			String sql="select * from "+ tbl +" where bno=? and writer=?";
			
			conn=DBManager.getConnection();
			pstmt=conn.prepareStatement(sql);
			
			pstmt.setInt(1, bno);
			pstmt.setString(2, writer);
			
			rs=pstmt.executeQuery();
			
			if(rs.next()) {
				qvo.setBno(rs.getInt("bno"));
				qvo.setContent(rs.getString("content"));
				qvo.setRegdate(rs.getDate("regdate"));
				qvo.setTitle(rs.getString("title"));
				qvo.setWriter(rs.getString("writer"));
			}
			
		}catch (Exception e) {
			e.printStackTrace();
		}finally {
			DBManager.close(conn, pstmt, rs);
		}
		
		return qvo;
	}
	
	public ArrayList<QueryVO> allQuery(Criteria cri){
		ArrayList<QueryVO> list=new ArrayList<QueryVO>();
		int start=cri.getPageStart();
		int end=start+cri.getPerPageNum();
		
		String sql="select * from(select A.*,Rownum RN from(select * from q_board order by regdate desc)A)"
				+"where RN>? and RN<=?";
		
		try {
			conn=DBManager.getConnection();
			pstmt=conn.prepareStatement(sql);
			pstmt.setInt(1, start);
			pstmt.setInt(2, end);
			
			rs=pstmt.executeQuery();
			
			while(rs.next()) {
				QueryVO qvo=new QueryVO();
				qvo.setBno(rs.getInt("bno"));
				qvo.setContent(rs.getString("content"));
				qvo.setRegdate(rs.getDate("regdate"));
				qvo.setTitle(rs.getString("title"));
				qvo.setWriter(rs.getString("writer"));
				
				list.add(qvo);
			}
		}catch (Exception e) {
			e.printStackTrace();
		}finally {
			DBManager.close(conn, pstmt, rs);
		}
		
		return list;
	}
	
	public ArrayList<QueryVO> myAllQuery(Criteria cri,String nickName){
		ArrayList<QueryVO> list=new ArrayList<QueryVO>();
		int start=cri.getPageStart();
		int end=start+cri.getPerPageNum();
		
		String sql="select * from(select A.*,Rownum RN from(select * from q_board where writer=? order by regdate desc)A)"
				+"where RN>? and RN<=?";
		
		try {
			conn=DBManager.getConnection();
			pstmt=conn.prepareStatement(sql);
			pstmt.setString(1, nickName);
			pstmt.setInt(2, start);
			pstmt.setInt(3, end);
			
			rs=pstmt.executeQuery();
			
			while(rs.next()) {
				QueryVO qvo=new QueryVO();
				qvo.setBno(rs.getInt("bno"));
				qvo.setContent(rs.getString("content"));
				qvo.setRegdate(rs.getDate("regdate"));
				qvo.setTitle(rs.getString("title"));
				qvo.setWriter(rs.getString("writer"));
				
				list.add(qvo);
			}
		}catch (Exception e) {
			e.printStackTrace();
		}finally {
			DBManager.close(conn, pstmt, rs);
		}
		
		return list;
	}
	
	public int countAllBoard() {
		int result=0;
		String sql="select count(*) from "+tbl;
		
		try {
			conn=DBManager.getConnection();
			pstmt=conn.prepareStatement(sql);
			rs=pstmt.executeQuery();
			
			if(rs.next()) {
				result=rs.getInt(1);
			}
		}catch (Exception e) {
			e.printStackTrace();
		}finally {
			DBManager.close(conn, pstmt, rs);
		}
		
		return result;
	}
	
	public int countMyBoard(String nickName) {
		int result=0;
		String sql="select count(*) from "+tbl+ " where writer=?";
		
		try {
			conn=DBManager.getConnection();
			pstmt=conn.prepareStatement(sql);
			pstmt.setString(1, nickName);
			rs=pstmt.executeQuery();
			
			if(rs.next()) {
				result=rs.getInt(1);
			}
		}catch (Exception e) {
			e.printStackTrace();
		}finally {
			DBManager.close(conn, pstmt, rs);
		}
		
		return result;
	}
	

}
