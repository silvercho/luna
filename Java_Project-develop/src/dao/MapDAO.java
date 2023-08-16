package dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

import org.springframework.stereotype.Component;

import model.MapVO;
import util.DBManager;

@Component
public class MapDAO {

	Connection conn = null;
	PreparedStatement pstmt = null;
	ResultSet rs = null;

	public ArrayList<MapVO> searchAddr(String keyword) {
		String sql = "select statnm, addr from charger where statnm like '%'||?||'%' or addr like '%'||?||'%'";
		ArrayList<MapVO> mapList = new ArrayList<MapVO>();

		try {
			conn = DBManager.getConnection();
			pstmt = conn.prepareStatement(sql);
			pstmt.setString(1, keyword);
			pstmt.setString(2, keyword);

			rs = pstmt.executeQuery();

			while (rs.next()) {
				MapVO mvo = new MapVO();
				mvo.setAddr(rs.getString("addr"));
				mvo.setStatNm(rs.getString("statnm"));

				mapList.add(mvo);
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			DBManager.close(conn, pstmt, rs);
		}

		return mapList;
	}
	
	public ArrayList<MapVO> selectLocationInfo(String statNm) {
		String sql= "select * from charger where statnm=?";
		ArrayList<MapVO> mapList = new ArrayList<MapVO>();
		
		try {
			conn=DBManager.getConnection();
			pstmt=conn.prepareStatement(sql);
			pstmt.setString(1, statNm);
			
			rs=pstmt.executeQuery();
			
			while(rs.next()) {
				MapVO mvo=new MapVO();
				mvo.setAddr(rs.getString("addr"));
				mvo.setChgerType(rs.getString("chgertype"));
				mvo.setBnm(rs.getString("bnm"));
				mvo.setCount(rs.getInt("count"));
				mvo.setLat(rs.getDouble("lat"));
				mvo.setLng(rs.getDouble("lng"));
				mvo.setParkingfree(rs.getString("parkingfree"));
				mvo.setStat(rs.getString("stat"));
				mvo.setStatId(rs.getString("statid"));
				mvo.setStatNm(rs.getString("statnm"));
				mvo.setUseTime(rs.getString("usetime"));
				
				mapList.add(mvo);
			}
		}catch (Exception e) {
			e.printStackTrace();
		}finally {
			DBManager.close(conn, pstmt, rs);
		}
		
		return mapList;
	}
	
	public MapVO oneLocationInfo(String statNm) {
		String sql= "select * from charger where statnm=?";
		MapVO mvo=new MapVO();
		
		try {
			conn=DBManager.getConnection();
			pstmt=conn.prepareStatement(sql);
			pstmt.setString(1, statNm);
			
			rs=pstmt.executeQuery();
			
			while(rs.next()) {
				mvo.setAddr(rs.getString("addr"));
				mvo.setChgerType(rs.getString("chgertype"));
				mvo.setBnm(rs.getString("bnm"));
				mvo.setCount(rs.getInt("count"));
				mvo.setLat(rs.getDouble("lat"));
				mvo.setLng(rs.getDouble("lng"));
				mvo.setParkingfree(rs.getString("parkingfree"));
				mvo.setStat(rs.getString("stat"));
				mvo.setStatId(rs.getString("statid"));
				mvo.setStatNm(rs.getString("statnm"));
				mvo.setUseTime(rs.getString("usetime"));
			}
		}catch (Exception e) {
			e.printStackTrace();
		}finally {
			DBManager.close(conn, pstmt, rs);
		}
		
		return mvo;
	}

}
