package com.demo.FoodWasteManagementSystem.service.ngo;

import java.util.List;

import com.demo.FoodWasteManagementSystem.beans.ngo.NGO;

public interface NGOService {

	List<NGO> getAllNgos(int role_id);

	

	void addNewNgo(NGO ngo);



	NGO getNgo(String username, String password);

}
