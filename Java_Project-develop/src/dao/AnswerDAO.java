package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

import org.springframework.stereotype.Component;

import model.AnswerVO;
import model.Criteria;
import model.QueryVO;
import util.DBManager;

@Component
public class AnswerDAO {
	final String tbl = "re_board";
	
	Connection conn=null;
	PreparedStatement pstmt=null;
	ResultSet rs=null;
	
	public void insertBoard(AnswerVO qvo) {
		
		try {
			String sql="insert into " + tbl + "(bno,re_bno,title,content,writer) values(q_board_seq.nextval,?,?,?,?)";
			conn = DBManager.getConnection();
			pstmt=conn.prepareStatement(sql);
			
			pstmt.setInt(1, qvo.getRebno());
			pstmt.setString(2, qvo.getTitle());
			pstmt.setString(3, qvo.getContent());
			pstmt.setString(4, qvo.getWriter());
			
			pstmt.executeUpdate();
		}catch (Exception e) {
			e.printStackTrace();
		}finally {
			DBManager.close(conn, pstmt);
		}
	}
	
	public ArrayList<String> selectBoard(int bno) {
		ArrayList<String> contents = new ArrayList<String>();
		
		try {
			String sql="select * from "+ tbl +" where re_bno=?";
			
			conn=DBManager.getConnection();
			pstmt=conn.prepareStatement(sql);
			
			pstmt.setInt(1, bno);
			
			rs=pstmt.executeQuery();
			
			while(rs.next()) {
				String content = rs.getString("content"); 
				contents.add(content);
			}
			
		}catch (Exception e) {
			e.printStackTrace();
		}finally {
			DBManager.close(conn, pstmt, rs);
		}
		
		return contents;	
	}
	
	public int updateBoard(AnswerVO qvo) {
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
	
	public AnswerVO oneQuery(int bno) {
		AnswerVO avo=new AnswerVO();
		
		try {
			String sql="select * from "+ tbl +" where re_bno=?";
			
			conn=DBManager.getConnection();
			pstmt=conn.prepareStatement(sql);
			
			pstmt.setInt(1, bno);
			
			rs=pstmt.executeQuery();
			
			if(rs.next()) {
				avo.setBno(rs.getInt("bno"));
				avo.setContent(rs.getString("content"));
				avo.setRegdate(rs.getDate("regdate"));
				avo.setTitle(rs.getString("title"));
				avo.setWriter(rs.getString("writer"));
			}
			
		}catch (Exception e) {
			e.printStackTrace();
		}finally {
			DBManager.close(conn, pstmt, rs);
		}
		
		return avo;
	}
	
	public ArrayList<AnswerVO> allQuery(Criteria cri){
		ArrayList<AnswerVO> list=new ArrayList<AnswerVO>();
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
				AnswerVO qvo=new AnswerVO();
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
	
	public ArrayList<AnswerVO> myAllQuery(Criteria cri,String nickName){
		ArrayList<AnswerVO> list=new ArrayList<AnswerVO>();
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
				AnswerVO qvo=new AnswerVO();
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
