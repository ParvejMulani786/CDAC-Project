package com.demo.FoodWasteManagementSystem.controller.formdetails;

import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.FoodWasteManagementSystem.beans.formdetails.FoodDetails;
import com.demo.FoodWasteManagementSystem.service.formdetails.FoodDetailsService;

@CrossOrigin
@RestController
@RequestMapping("/fooddetails")
public class FoodDetailsController {
	
	@Autowired
	FoodDetailsService fooddetailsservice;
	
	@GetMapping("/displayform")
	public List<FoodDetails> DisplayAll(){
		List<FoodDetails> flist= fooddetailsservice.ShowAll();
	//	flist.add(new FoodDetails(1,"paav bhaji",30,"100paav",1,1,"abhishek","pune","9493434432",1,"sidbhi",2,"xeno pvt.ltd","pending","4353454","34535435"));
		return flist;
	}
	
	
	@PostMapping("/addform")
	public String addProduct(@RequestBody FoodDetails fooddetails) {
		
		return fooddetailsservice.addnewFoodDetails(fooddetails);
	}
	
	//for user
	@GetMapping("/showreqlist/{user_id}")
	public List<FoodDetails> RequestList(@PathVariable int user_id  ){
		
	    return fooddetailsservice.getreqlist(user_id);
		
	}
	//for user
	@GetMapping("/showconfirmlist/{user_id}")
	public List<FoodDetails> ConfirmListForUser(@PathVariable int user_id  ){
		
	    return fooddetailsservice.getconlist(user_id);
		
	}
	
	//BELOW THREE FUNCTIONs FOR NGO
	//used to show request list which Are in pending 
	@GetMapping("/showreqlisttongo/{id}")
	public List<FoodDetails> ShowreqListToNgo(@PathVariable int id) {
		
		return fooddetailsservice.DisplayReqListToNgo(id);
	}
		
	// used to confirm list
	@GetMapping("/confirmlistngo/{id}")
	public String SetConfirmListById(@PathVariable int id  ){
		
	   return fooddetailsservice.getreqlistconfirm(id);
		
	}
	
	// used to reject  list status
	@GetMapping("/rejectlistngo/{id}")
	public String rejectListById(@PathVariable int id  ){
		
	   return fooddetailsservice.getreqlistreject(id);
		
	}
	
	//used to show Confirmed list which Are in confirmed
	@GetMapping("/showconlisttongo/{id}")
	public List<FoodDetails> ShowConListToNgo(@PathVariable int id) {
		
		return fooddetailsservice.DisplayConListToNgo(id);
	}
	
	//BELOW THREE FUNCTIONS FOR SSI TO CHECK STATUS AND CONFIRM IT
	// used to confirm list
		@GetMapping("/confirmlistssi/{id}")
		public String SetConfirmListByIdForSsi(@PathVariable int id  ){
			
		    return fooddetailsservice.GetreqlistconfirmBySsi(id);
			
		}
		
		// used to reject  list status
		@GetMapping("/rejectlistssi/{id}")
		public String rejectListByIdForSsi(@PathVariable int id  ){
			
		   return fooddetailsservice.GetreqlistRejectBySsi(id);
			
		}
		
		//used to show request list which Are in pending 
		@GetMapping("/showreqlisttossi/{id}")
		public List<FoodDetails> ShowreqListToSsi(@PathVariable int id) {
			
			return fooddetailsservice.DisplayReqListToSsi(id);
		}
		
		//used to show Confirmed list which Are in confirmed
		@GetMapping("/showconlisttossi/{id}")
		public List<FoodDetails> ShowConListToSsi(@PathVariable int id) {
			
			return fooddetailsservice.DisplayConListToSsi(id);
		}
	
	
	
	
	

}
