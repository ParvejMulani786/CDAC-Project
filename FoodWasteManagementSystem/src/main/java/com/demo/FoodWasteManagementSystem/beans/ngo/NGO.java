package com.demo.FoodWasteManagementSystem.beans.ngo;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;




@Entity
@Table(name="ngo")
public class NGO {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int ngo_id;
	private String ngo_name;
	private int role_id;
	private String ngo_phone;
	private String ngo_email;
	private String ngo_time;
	private String ngo_username;
	private String ngo_password;
	@OneToOne(cascade=CascadeType.ALL)
	private NGO_Address ngo_address;
	
	public NGO() {
		super();
		// TODO Auto-generated constructor stub
	}

	public NGO(int ngo_id, String ngo_name, int role_id, String ngo_phone, String ngo_email, String ngo_time,
			String ngo_username, String ngo_password, NGO_Address ngo_address) {
		super();
		this.ngo_id = ngo_id;
		this.ngo_name = ngo_name;
		this.role_id = role_id;
		this.ngo_phone = ngo_phone;
		this.ngo_email = ngo_email;
		this.ngo_time = ngo_time;
		this.ngo_username = ngo_username;
		this.ngo_password = ngo_password;
		this.ngo_address = ngo_address;
	}

	public int getNgo_id() {
		return ngo_id;
	}

	public void setNgo_id(int ngo_id) {
		this.ngo_id = ngo_id;
	}

	public String getNgo_name() {
		return ngo_name;
	}

	public void setNgo_name(String ngo_name) {
		this.ngo_name = ngo_name;
	}

	public int getRole_id() {
		return role_id;
	}

	public void setRole_id(int role_id) {
		this.role_id = role_id;
	}

	public String getNgo_phone() {
		return ngo_phone;
	}

	public void setNgo_phone(String ngo_phone) {
		this.ngo_phone = ngo_phone;
	}

	public String getNgo_email() {
		return ngo_email;
	}

	public void setNgo_email(String ngo_email) {
		this.ngo_email = ngo_email;
	}

	public String getNgo_time() {
		return ngo_time;
	}

	public void setNgo_time(String ngo_time) {
		this.ngo_time = ngo_time;
	}

	public String getNgo_username() {
		return ngo_username;
	}

	public void setNgo_username(String ngo_username) {
		this.ngo_username = ngo_username;
	}

	public String getNgo_password() {
		return ngo_password;
	}

	public void setNgo_password(String ngo_password) {
		this.ngo_password = ngo_password;
	}

	public NGO_Address getNgo_address() {
		return ngo_address;
	}

	public void setNgo_address(NGO_Address ngo_address) {
		this.ngo_address = ngo_address;
	}

	@Override
	public String toString() {
		return "NGO [ngo_id=" + ngo_id + ", ngo_name=" + ngo_name + ", role_id=" + role_id + ", ngo_phone=" + ngo_phone
				+ ", ngo_email=" + ngo_email + ", ngo_time=" + ngo_time + ", ngo_username=" + ngo_username
				+ ", ngo_password=" + ngo_password + ", ngo_address=" + ngo_address + "]";
	}
	
}
	
	
	
	
	
	
	
	
	

	
