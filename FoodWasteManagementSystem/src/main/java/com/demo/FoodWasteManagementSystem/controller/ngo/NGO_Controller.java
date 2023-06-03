package com.demo.FoodWasteManagementSystem.controller.ngo;

import java.util.ArrayList;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.FoodWasteManagementSystem.beans.ngo.NGO;
import com.demo.FoodWasteManagementSystem.beans.ngo.NGO_Address;
import com.demo.FoodWasteManagementSystem.service.ngo.NGOService;



@CrossOrigin
@RestController
@RequestMapping("/ngo")
public class NGO_Controller {
	
	@Autowired
	NGOService ngoservice;
	
	@GetMapping("/ngolist/{role_id}")
	public List<NGO> displayAll(@PathVariable int role_id){
		return ngoservice.getAllNgos(role_id);
//		List<NGO> ngolist=new ArrayList<>();
//		NGO_Address address1=new NGO_Address(1,"Paud Mulshi Road","Bavdhan","Pune","Maharashtra",411021);
//		NGO ngo1=new NGO(1,"RESQ Charitable Trust",1,"+91 9892999111","team@resqct.org","11 AM-5 PM","user1","pass1",address1);
//		ngolist.add(ngo1);
//		return ngolist;
		
	}
	@PostMapping("/register")
	public String addNGO(@RequestBody NGO ngo){
		ngoservice.addNewNgo(ngo);
		
		return "Data Added Successfully!! ";
		
	}
	
	@PostMapping("/login/{username}/{password}")
	public NGO validateNgo(@PathVariable String username,@PathVariable String password) {
		NGO ngo=ngoservice.getNgo(username,password);

		
		if(ngo!=null) {
			
			return ngo;
		}
		else 
			return null;
		
		}
	
	

}
