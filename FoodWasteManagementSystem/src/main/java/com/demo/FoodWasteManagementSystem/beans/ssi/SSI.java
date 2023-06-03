package com.demo.FoodWasteManagementSystem.beans.ssi;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;


	@Entity
	
	public class SSI {
		@Id
		@GeneratedValue(strategy = GenerationType.AUTO)
		private int ssi_id;
		private String ssi_username;
		private String ssi_password;
		private String ssi_name;
		private String ssi_phone;
		private String ssi_email;
		private String ssi_time;
		
		@OneToOne(cascade = CascadeType.ALL)
		private SSI_Address ssi_Address;
		
		
		public SSI() {
			super();
			// TODO Auto-generated constructor stub
		}

		public SSI(int ssi_id, String ssi_username, String ssi_password, String ssi_name, String ssi_phone,
				String ssi_email, String ssi_time, SSI_Address ssi_Address) {
			super();
			this.ssi_id = ssi_id;
			this.ssi_username = ssi_username;
			this.ssi_password = ssi_password;
			this.ssi_name = ssi_name;
			this.ssi_phone = ssi_phone;
			this.ssi_email = ssi_email;
			this.ssi_time = ssi_time;
			this.ssi_Address = ssi_Address;
		
		}

		public int getSsi_id() {
			return ssi_id;
		}

		public void setSsi_id(int ssi_id) {
			this.ssi_id = ssi_id;
		}

		public String getSsi_username() {
			return ssi_username;
		}

		public void setSsi_username(String ssi_username) {
			this.ssi_username = ssi_username;
		}

		public String getSsi_password() {
			return ssi_password;
		}

		public void setSsi_password(String ssi_password) {
			this.ssi_password = ssi_password;
		}

		public String getSsi_name() {
			return ssi_name;
		}

		public void setSsi_name(String ssi_name) {
			this.ssi_name = ssi_name;
		}

		public String getSsi_phone() {
			return ssi_phone;
		}

		public void setSsi_phone(String ssi_phone) {
			this.ssi_phone = ssi_phone;
		}

		public String getSsi_email() {
			return ssi_email;
		}

		public void setSsi_email(String ssi_email) {
			this.ssi_email = ssi_email;
		}

		public String getSsi_time() {
			return ssi_time;
		}

		public void setSsi_open_time(String ssi_time) {
			this.ssi_time = ssi_time;
		}


		public SSI_Address getSsi_Address() {
			return ssi_Address;
		}

		public void setSsi_Address(SSI_Address ssi_Address) {
			this.ssi_Address = ssi_Address;
		}

		

		@Override
		public String toString() {
			return "SSI [ssi_id=" + ssi_id + ", ssi_username=" + ssi_username + ", ssi_password=" + ssi_password
					+ ", ssi_name=" + ssi_name + ", ssi_phone=" + ssi_phone + ", ssi_email=" + ssi_email
					+ ", ssi_time=" + ssi_time + ", ssi_Address="
					+ ssi_Address + ",]";
		}
		

	


}
