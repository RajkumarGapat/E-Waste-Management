package com.evanesce.entity;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@ToString
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
public class Request {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int reqid;
	private String name;
	private String email;
	private String address;
	private String city;
	private int payment;
	private String ewasteQty;
	private int quantity;
	private boolean status = false;
	private boolean imageuploadstatus = false;
	@ManyToOne
	@JoinColumn(name = "agent_id")
	private Agent agentid;
	@JsonIgnore // need to ignore during marshalling
	@OneToMany(mappedBy = "request_id", cascade = CascadeType.ALL)
	private List<FileDB> images;
	public int getReqid() {
		return reqid;
	}
	public void setReqid(int reqid) {
		this.reqid = reqid;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public int getPayment() {
		return payment;
	}
	public void setPayment(int payment) {
		this.payment = payment;
	}
	public String getEwasteQty() {
		return ewasteQty;
	}
	public void setEwasteQty(String ewasteQty) {
		this.ewasteQty = ewasteQty;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public boolean isStatus() {
		return status;
	}
	public void setStatus(boolean status) {
		this.status = status;
	}
	public boolean isImageuploadstatus() {
		return imageuploadstatus;
	}
	public void setImageuploadstatus(boolean imageuploadstatus) {
		this.imageuploadstatus = imageuploadstatus;
	}
	public Agent getAgentid() {
		return agentid;
	}
	public void setAgentid(Agent agentid) {
		this.agentid = agentid;
	}
	public List<FileDB> getImages() {
		return images;
	}
	public void setImages(List<FileDB> images) {
		this.images = images;
	}
	

}