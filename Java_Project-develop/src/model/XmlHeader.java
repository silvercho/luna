package model;

import org.w3c.dom.NodeList;

public class XmlHeader {
	String resultCode;
	String resultMsg;
	long totalCount;
	long pageNo;
	long numOfRows;
	NodeList items;
	
	public String getResultCode() {
		return resultCode;
	}
	public void setResultCode(String resultCode) {
		this.resultCode = resultCode;
	}
	public String getResultMsg() {
		return resultMsg;
	}
	public void setResultMsg(String resultMsg) {
		this.resultMsg = resultMsg;
	}
	public long getTotalCount() {
		return totalCount;
	}
	public void setTotalCount(long totalCount) {
		this.totalCount = totalCount;
	}
	public long getPageNo() {
		return pageNo;
	}
	public void setPageNo(long pageNo) {
		this.pageNo = pageNo;
	}
	public long getNumOfRows() {
		return numOfRows;
	}
	public void setNumOfRows(long numOfRows) {
		this.numOfRows = numOfRows;
	}
	public NodeList getItems() {
		return items;
	}
	public void setItems(NodeList items) {
		this.items = items;
	}	
}
