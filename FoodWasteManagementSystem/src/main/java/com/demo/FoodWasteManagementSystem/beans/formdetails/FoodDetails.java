package com.demo.FoodWasteManagementSystem.beans.formdetails;

import javax.annotation.Generated;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name ="Food_Details")
public class FoodDetails {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int food_id;
	private String food_items;
	private int feed_count;
	private String feed_qty;
	private int food_quality_in_days;
	private int user_id;
	private String user_name;
	private String user_address;
	private String user_contact;
	private int ngo_id;
	private String ngo_name;
	private int ssi_id;
	private String ssi_name;
	private String ssi_contact;
	private String status;
	private String ngo_contact;
	
	public FoodDetails() {
		super();
	}

	public FoodDetails(int food_id, String food_items, int feed_count, String feed_qty, int food_quality_in_days,
			int user_id, String user_name, String user_address, String user_contact, int ngo_id, String ngo_name,
			int ssi_id, String ssi_name, String status,String ssi_contact,String ngo_contact) {
		super();
		this.food_id = food_id;
		this.food_items = food_items;
		this.feed_count = feed_count;
		this.feed_qty = feed_qty;
		this.food_quality_in_days = food_quality_in_days;
		this.user_id = user_id;
		this.user_name = user_name;
		this.user_address = user_address;
		this.user_contact = user_contact;
		this.ngo_id = ngo_id;
		this.ngo_name = ngo_name;
		this.ngo_contact=ngo_contact;
		this.ssi_id = ssi_id;
		this.ssi_name = ssi_name;
		this.ssi_contact=ssi_contact;
		
		this.status = status;
		
	}

	public int getFood_id() {
		return food_id;
	}

	public void setFood_id(int food_id) {
		this.food_id = food_id;
	}

	public String getFood_items() {
		return food_items;
	}

	public void setFood_items(String food_items) {
		this.food_items = food_items;
	}

	public int getFeed_count() {
		return feed_count;
	}

	public void setFeed_count(int feed_count) {
		this.feed_count = feed_count;
	}

	public String getFeed_qty() {
		return feed_qty;
	}

	public String getSsi_contact() {
		return ssi_contact;
	}

	public void setSsi_contact(String ssi_contact) {
		this.ssi_contact = ssi_contact;
	}

	public void setFeed_qty(String feed_qty) {
		this.feed_qty = feed_qty;
	}

	public int getFood_quality_in_days() {
		return food_quality_in_days;
	}

	public void setFood_quality_in_days(int food_quality_in_days) {
		this.food_quality_in_days = food_quality_in_days;
	}

	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}

	public String getUser_name() {
		return user_name;
	}

	public void setUser_name(String user_name) {
		this.user_name = user_name;
	}

	public String getUser_address() {
		return user_address;
	}

	public void setUser_address(String user_address) {
		this.user_address = user_address;
	}

	public String getUser_contact() {
		return user_contact;
	}

	public void setUser_contact(String user_contact) {
		this.user_contact = user_contact;
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

	public int getSsi_id() {
		return ssi_id;
	}

	public void setSsi_id(int ssi_id) {
		this.ssi_id = ssi_id;
	}

	public String getSsi_name() {
		return ssi_name;
	}

	public void setSsi_name(String ssi_name) {
		this.ssi_name = ssi_name;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
	
	

	public String getContact() {
		return ngo_contact;
	}

	public void setContact(String contact) {
		this.ngo_contact = contact;
	}

	@Override
	public String toString() {
		return "FoodDetails [food_id=" + food_id + ", food_items=" + food_items + ", feed_count=" + feed_count
				+ ", feed_qty=" + feed_qty + ", food_quality_in_days=" + food_quality_in_days + ", user_id=" + user_id
				+ ", user_name=" + user_name + ", user_address=" + user_address + ", user_contact=" + user_contact
				+ ", ngo_id=" + ngo_id + ", ngo_name=" + ngo_name + ", ssi_id=" + ssi_id + ", ssi_name=" + ssi_name
				+ ", ssi_contact=" + ssi_contact + ", status=" + status + ", contact=" + ngo_contact + "]";
	}

}
