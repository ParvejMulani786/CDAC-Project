package com.demo.FoodWasteManagementSystem.service.ssi;

import java.util.List;

import com.demo.FoodWasteManagementSystem.beans.ssi.SSI;

public interface SSIService {

	public List<SSI> getAllssi();

	public void addNewSSI(SSI ssi);

	public SSI login(String username, String password);

}
