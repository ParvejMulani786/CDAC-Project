package com.demo.FoodWasteManagementSystem.beans.ssi;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class SSI_Address {
	@Id
	@GeneratedValue
	private int ssi_aid;
	private String street;
	private String city;
	private String district;
	private String state;
	private int pin;
	public SSI_Address() {
		super();
		// TODO Auto-generated constructor stub
	}
	public SSI_Address(int ssi_aid, String street, String city, String district, String state, int pin) {
		super();
		this.ssi_aid = ssi_aid;
		this.street = street;
		this.city = city;
		this.district = district;
		this.state = state;
		this.pin = pin;
	}
	public int getSsi_aid() {
		return ssi_aid;
	}
	public void setSsi_aid(int ssi_aid) {
		this.ssi_aid = ssi_aid;
	}
	public String getStreet() {
		return street;
	}
	public void setStreet(String street) {
		this.street = street;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getDistrict() {
		return district;
	}
	public void setDistrict(String district) {
		this.district = district;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public int getPin() {
		return pin;
	}
	public void setPin(int pin) {
		this.pin = pin;
	}
	@Override
	public String toString() {
		return "SSI_Address [ssi_aid=" + ssi_aid + ", street=" + street + ", city=" + city + ", district=" + district
				+ ", state=" + state + ", pin=" + pin + "]";
	}
	
}
