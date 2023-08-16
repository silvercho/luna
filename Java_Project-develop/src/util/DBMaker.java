package util;
import java.io.InputStreamReader;
import java.io.StringReader;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.ProtocolException;
import java.net.URL;
import java.net.URLEncoder;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.io.BufferedReader;
import java.io.IOException;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.InputSource;
import org.xml.sax.SAXException;

import model.ChargingStation;
import model.XmlHeader;

public class DBMaker {

	public static String get(int pageNo, int numOfRows, String zcode) {
		String key = "Fch1sDd3TFbxaT%2F2dJy0D1V2ZMUi%2BV%2FAq%2BJct7QCDBhi0MhtEQl3wnY3qpd14RKTBDOjRb%2Bibz%2FxXqNCuUlMsw%3D%3D";
        StringBuilder urlBuilder = new StringBuilder("http://apis.data.go.kr/B552584/EvCharger/getChargerInfo"); /*URL*/
        
        try {
			urlBuilder.append("?" + URLEncoder.encode("serviceKey","UTF-8") + "=" + key);
	        urlBuilder.append("&" + URLEncoder.encode("pageNo","UTF-8") + "=" + URLEncoder.encode(String.valueOf(pageNo), "UTF-8")); /*페이지 번호*/
	        urlBuilder.append("&" + URLEncoder.encode("numOfRows","UTF-8") + "=" + URLEncoder.encode(String.valueOf(numOfRows), "UTF-8")); /*한 페이지 결과 수 (최소 10, 최대 9999)*/
	        urlBuilder.append("&" + URLEncoder.encode("zcode","UTF-8") + "=" + URLEncoder.encode(zcode, "UTF-8")); /*시도 코드 (행정구역코드 앞 2자리)*/
	        
	        //System.out.println(urlBuilder.toString());
	        URL url= new URL(urlBuilder.toString());

	        HttpURLConnection conn = (HttpURLConnection) url.openConnection();

	        conn.setRequestMethod("GET");
	        conn.setRequestProperty("Content-type", "application/json");
	        conn.setConnectTimeout(20000); //20sec
	        //System.out.println("Response code: " + conn.getResponseCode());
	        BufferedReader rd;
	        if(conn.getResponseCode() >= 200 && conn.getResponseCode() <= 300) {
	            rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
	        } else {
	            rd = new BufferedReader(new InputStreamReader(conn.getErrorStream()));
	        }
	        StringBuilder sb = new StringBuilder();
	        String line;
	        while ((line = rd.readLine()) != null) {
	            sb.append(line);
	        }
	        rd.close();
	        conn.disconnect();
	        
	        return sb.toString();	
	        
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		} catch (MalformedURLException e) {
			e.printStackTrace();
		} catch (ProtocolException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
        
        return null;	
	}
	
	public static XmlHeader getHeader(String xml) {
		try {
			XmlHeader result = new XmlHeader();
			DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
			DocumentBuilder builder = factory.newDocumentBuilder();
			Document document= builder.parse(new InputSource(new StringReader(xml)));
			Element root = document.getDocumentElement();
			Node header = root.getFirstChild();
			Node body = header.getNextSibling();	
			NodeList item = body.getChildNodes();
			NodeList items = item.item(0).getChildNodes();		
			NodeList hdrs = header.getChildNodes();
			
			for (int n=0; n<hdrs.getLength(); n++)
			{
				Node e = hdrs.item(n);
				String content = e.getTextContent();
				
				switch (e.getNodeName())
				{
				case "resultCode":
					result.setResultCode(content);
					break;
				case "resultMsg":
					result.setResultMsg(content);
					break;
				case "totalCount":
					result.setTotalCount(Long.parseLong(content));
					break;
				case "pageNo":
					result.setPageNo(Long.parseLong(content));
					break;
				case "numOfRows":
					result.setNumOfRows(Long.parseLong(content));
					break;					
				}
			}
			
			result.setItems(items);
			return result;
		} catch (ParserConfigurationException e) {
			e.printStackTrace();
		} catch (SAXException | IOException e) {
			e.printStackTrace();
		}		
		
		return null;
	}
	
	public static void getItems(NodeList items) {
		for (int n=0; n<items.getLength(); n++)
		{
			Node i = items.item(n);
			NodeList nodes = i.getChildNodes();
			ChargingStation cs = new ChargingStation();
			
			if (i.getNodeType() == Node.ELEMENT_NODE) {
				
				for (int m=0; m<nodes.getLength(); m++) {
					Node e = nodes.item(m);
					
					String name = e.getNodeName(); 
					String content = e.getTextContent();

					switch (name) {
						case "statNm":
							cs.setStatNm(content);
						break;
						case "statId":
							cs.setStatId(content); 
						break;
						case "chgerId":
							cs.setChgerId(content);
						break;
						case "chgerType":
							cs.setChgerType(content);
						break;
						case "addr":
							cs.setAddr(content);
						break;
						case "location":
							cs.setLocation(content);
						break;
						case "lat":
							cs.setLat(Double.parseDouble(content));
						break;
						case "lng":
							cs.setLng(Double.parseDouble(content));
						break;
						case "useTime":
							cs.setUseTime(content);
						break;
						case "busiId":
							cs.setBusiId(content);
						break;
						case "bnm":
							cs.setBnm(content);
						break;
						case "busiNm":
							cs.setBusiNm(content);
						break;
						case "busiCall":
							cs.setBusiCall(content);
						break;
						case "stat":
							cs.setStat(content);
						break;
						case "statUpdDt":
							cs.setStatUpdDt(content);
						break;
						case "lastTsdt":
							cs.setLastTsdt(content);
						break;
						case "lastTedt":
							cs.setLastTedt(content);
						break;
						case "nowTsdt":
							cs.setNowTsdt(content);
						break;
						case "powerType":
							cs.setPowerType(content);
						break;
						case "output":
							cs.setOutput(content);
						break;
						case "method":
							cs.setMethod(content);
						break;
						case "zcode":
							cs.setZcode(content);
						break;
						case "parkingFree":
							cs.setParkingFree(content);
						break;
						case "note":
							cs.setNote(content);
						break;
						case "limitYn":
							cs.setLimitYn(content);
						break;
						case "limitDetail":
							cs.setLimitDetail(content);
						break;
						case "delYn":
							cs.setDelYn(content);
						break;
						case "delDetail":
							cs.setDelDetail(content);
						break;
					}
				}
				
				insert("CHARGINGSTATION", cs); //E-STATION
			}
		}
	}
	
	public static void delete(String tbl) {
		int result = -1;
		String sql = "delete from " + tbl;
		
		Connection conn=null;
		PreparedStatement pstmt=null;
		
		try {
			conn = DBManager.getConnection();
			pstmt=conn.prepareStatement(sql);
			result = pstmt.executeUpdate();
		} catch(Exception e) {
			e.printStackTrace();
		} finally {
			try {
				DBManager.close(conn, pstmt);
			}catch(Exception e) {
				e.printStackTrace();
			}
		}
		
		if (result == 1)
			System.out.println("[LOG] Delete Complete");
		else
			System.out.println("[ERROR] Delete Fail");		
	}
		
	public static void insert(String tbl, ChargingStation cs) {
		int result = -1;
		int idx = 1;
		String sql= "insert into " + tbl + " values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
		
		Connection conn=null;
		PreparedStatement pstmt=null;
		
		try {
			conn = DBManager.getConnection();
			pstmt = conn.prepareStatement(sql);
						
			pstmt.setString(idx++, cs.getStatNm());
			pstmt.setString(idx++, cs.getStatId());
			pstmt.setString(idx++, cs.getChgerId());
			pstmt.setString(idx++, cs.getChgerType());
			pstmt.setString(idx++, cs.getAddr());
			pstmt.setString(idx++, cs.getLocation());
			pstmt.setDouble(idx++, cs.getLat());
			pstmt.setDouble(idx++, cs.getLng());
			pstmt.setString(idx++, cs.getUseTime());
			pstmt.setString(idx++, cs.getBusiId());
			pstmt.setString(idx++, cs.getBnm());
			pstmt.setString(idx++, cs.getBusiNm());
			pstmt.setString(idx++, cs.getBusiCall());
			pstmt.setString(idx++, cs.getStat());
			pstmt.setString(idx++, cs.getStatUpdDt());
			pstmt.setString(idx++, cs.getLastTsdt());
			pstmt.setString(idx++, cs.getLastTedt());
			pstmt.setString(idx++, cs.getNowTsdt());
			pstmt.setString(idx++, cs.getPowerType());
			pstmt.setString(idx++, cs.getOutput());
			pstmt.setString(idx++, cs.getMethod());
			pstmt.setString(idx++, cs.getZcode());
			pstmt.setString(idx++, cs.getParkingFree());
			pstmt.setString(idx++, cs.getNote());
			pstmt.setString(idx++, cs.getLimitYn());
			pstmt.setString(idx++, cs.getLimitDetail());
			pstmt.setString(idx++, cs.getDelYn());
			pstmt.setString(idx++, cs.getDelDetail());
			
			result = pstmt.executeUpdate();
			
			if (result == 1)
				System.out.println("[LOG] Insert Complete : " + cs.getStatId());
			else
				System.out.println("[ERROR] Insert Fail : " + cs.getStatId());	
		} catch(Exception e) {
			e.printStackTrace();
		} finally {
			try {
				DBManager.close(conn, pstmt);
				Thread.sleep(1);
			}catch(Exception e) {
				e.printStackTrace();
			}
		}
	}
	
	public static void get(String region) throws InterruptedException {
		final int rows = 9999; 
		boolean isRun = true;
		int step = 0;
		long totalCnt = 0;
		long elseCnt = 0;
		int pageCnt = 0;
		int pageCur = 1;
		XmlHeader header;
		NodeList items;
		String xml;
		
		while (isRun)
		{
			switch (step)
			{
			case 0: //Init Get
				System.out.println("[LOG] First GET : " + region);
				xml = get(pageCur, rows, region);
				header = getHeader(xml);
				
				if (header != null) {
					totalCnt = header.getTotalCount();
					items = header.getItems();
					pageCnt = (int)(totalCnt / rows);
					elseCnt = totalCnt - (pageCnt * rows);
					
					if (elseCnt != 0)
						pageCnt += 1;	
					
					System.out.println("[LOG] Page Count : " + pageCnt);
					System.out.println("[LOG] Page Current : " + pageCur);
					getItems(items);
					step = 1;
				}
				else {
					isRun = false;
					System.out.println("[ERROR] : NoHeader!");
				}
				
				break;
			case 1: //After Get
				if (pageCur < pageCnt + 1) { //Retry
					pageCur++;
					
					System.out.println("[LOG] Page Current : " + pageCur);
					xml = get(pageCur, rows, region);
					header = getHeader(xml);	
					
					if (header != null) {
						items = header.getItems();
						getItems(items);
					}
					else {
						isRun = false;
						System.out.println("[ERROR] : NoHeader!");					
					}
				}
				else { //Complete
					isRun = false;
					System.out.println("[LOG] Complete : " + region);	
				}
				break;
			}
			
			Thread.sleep(10);
		}	
	}
	
	//OpenAPI (GET) -> Response (XML) -> XML Parsing -> Object Copy -> Database Insert
	
	public static void main(String[] args) {
		
		System.out.println("Start OpenAPI GET & Database Insert!");
		
		int idx = 0;
		String[] region = new String[16];
		
		region[idx++] = "11"; //서울특별시
		region[idx++] = "26"; //부산광역시
		region[idx++] = "27"; //대구광역시
		region[idx++] = "28"; //인천광역시
		region[idx++] = "29"; //광주광역시
		region[idx++] = "30"; //대전광역시 //삽입완료
		region[idx++] = "31"; //울산광역시
		//region[idx++] = "36"; //세종특별자치시
		region[idx++] = "41"; //경기도
		region[idx++] = "42"; //강원도
		region[idx++] = "43"; //충청북도
		region[idx++] = "44"; //충청남도
		region[idx++] = "45"; //전라북도
		region[idx++] = "46"; //전라남도
		region[idx++] = "47"; //경상북도
		region[idx++] = "48"; //경상남도
		region[idx++] = "50"; //제주특별자치도
				
		//delete("CHARGINGSTATION");
		
		try {
			
			for (int n=0; n<region.length; n++) {
				get(region[n]);
			}			
			
		} catch (InterruptedException e) {
			e.printStackTrace();
		}	
	}
}

/*
create table ChargingStation(
   statNm varchar2(4000),
	statId varchar2(4000),
	chgerId varchar2(4000),
	chgerType varchar2(4000),
	addr varchar2(4000),
	location varchar2(4000),
	lat binary_double,
	lng binary_double,
	useTime varchar2(4000),
	busiId varchar2(4000),
	bnm varchar2(4000),
	busiNm varchar2(4000),
	busiCall varchar2(4000),
	stat varchar2(4000),
	statUpdDt varchar2(4000),
	lastTsdt varchar2(4000),
	lastTedt varchar2(4000),
	nowTsdt varchar2(4000),
	powerType varchar2(4000),
	output varchar2(4000),
	method varchar2(4000),
	zcode varchar2(4000),
	parkingFree varchar2(4000),
	note varchar2(4000),
	limitYn varchar2(4000),
	limitDetail varchar2(4000),
	delYn varchar2(4000),
	delDetail varchar2(4000)
);
*/
