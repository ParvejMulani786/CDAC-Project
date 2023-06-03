package com.demo.FoodWasteManagementSystem.service.formdetails;

import java.util.List;

import com.demo.FoodWasteManagementSystem.beans.formdetails.FoodDetails;


public interface FoodDetailsService {

	List<FoodDetails> ShowAll();

	String addnewFoodDetails(FoodDetails fooddetails);

	List<FoodDetails> getreqlist(int id);

	String getreqlistconfirm(int id);
	
	String getreqlistreject(int id);

	List<FoodDetails> getconlist(int user_id);

	List<FoodDetails> DisplayReqListToNgo(int id);

	List<FoodDetails> DisplayConListToNgo(int id);

	String GetreqlistconfirmBySsi(int id);
	
	String GetreqlistRejectBySsi(int id);

	List<FoodDetails> DisplayReqListToSsi(int id);

	List<FoodDetails> DisplayConListToSsi(int id);



	

}
