package util;

import java.sql.*;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.sql.DataSource;

public class DBManager {
	
	// select을 수행한 후 리소스 해제를 위한 메서드
	/*
	 * public static Connection getConnection() {
	 * 
	 * Connection conn=null;
	 * 
	 * try { Context initContext=new InitialContext(); DataSource
	 * ds=(DataSource)initContext.lookup("java:/comp/env/jdbc/Oracle11g");
	 * conn=ds.getConnection(); }catch(NamingException e) { e.printStackTrace();
	 * }catch(SQLException e) { e.printStackTrace(); }
	 * 
	 * return conn;
	 * 
	 * }
	 */
	
	public static String url = "jdbc:oracle:thin:@ezenac_high?TNS_ADMIN=C://oracle_wallet";
	public static String userid = "admin";
	public static String pwd = "Ezenac123456789";
	
	static Connection conn=null;
	
	public static Connection getConnection() {
		try {
			Class.forName("oracle.jdbc.OracleDriver");
			conn=DriverManager.getConnection(url,userid,pwd);
		}catch(Exception e) {
			e.printStackTrace();
		}
		
		return conn;
	}
	// select을 수행한 후 리소스 해제를 위한 메서드
	public static void close(Connection conn,PreparedStatement pstmt,ResultSet rs) {
		try {
			if(rs != null)
				rs.close();
			if(pstmt != null)
				pstmt.close();
			if(conn != null)
				conn.close();
		}catch(Exception e) {
			e.printStackTrace();
		}
	}
	
	// insert,update,delete
	public static void close(Connection conn,PreparedStatement pstmt) {
		try {
			if(pstmt != null)
				pstmt.close();
			if(conn != null)
				conn.close();
			
			Thread.sleep(1);
		}catch(Exception e) {
			e.printStackTrace();
		}
	}

}
