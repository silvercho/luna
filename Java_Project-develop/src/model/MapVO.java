package model;

import org.springframework.stereotype.Component;

@Component
public class MapVO {
	String statNm;
	String statId;
	String chgerType;
	String addr; 
	double lat;
	double lng;
	String useTime;
	String stat;
	String parkingfree;
	String bnm;
	int count;
	
	public String getParkingfree() {
		return parkingfree;
	}
	public void setParkingfree(String parkingfree) {
		this.parkingfree = parkingfree;
	}
	public String getBnm() {
		return bnm;
	}
	public void setBnm(String bnm) {
		this.bnm = bnm;
	}
	public String getStatNm() {
		return statNm;
	}
	public void setStatNm(String statNm) {
		this.statNm = statNm;
	}
	public String getStatId() {
		return statId;
	}
	public void setStatId(String statId) {
		this.statId = statId;
	}
	public String getChgerType() {
		return chgerType;
	}
	public void setChgerType(String chgerType) {
		this.chgerType = chgerType;
	}
	public String getAddr() {
		return addr;
	}
	public void setAddr(String addr) {
		this.addr = addr;
	}
	public double getLat() {
		return lat;
	}
	public void setLat(double lat) {
		this.lat = lat;
	}
	public double getLng() {
		return lng;
	}
	public void setLng(double lng) {
		this.lng = lng;
	}
	public String getUseTime() {
		return useTime;
	}
	public void setUseTime(String useTime) {
		this.useTime = useTime;
	}
	public String getStat() {
		return stat;
	}
	public void setStat(String stat) {
		this.stat = stat;
	}
	public int getCount() {
		return count;
	}
	public void setCount(int count) {
		this.count = count;
	}

}
