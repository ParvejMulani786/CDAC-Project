package com.demo.FoodWasteManagementSystem.controller.ssi;

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
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.demo.FoodWasteManagementSystem.beans.ssi.SSI;
import com.demo.FoodWasteManagementSystem.beans.ssi.SSI_Address;
import com.demo.FoodWasteManagementSystem.service.ssi.SSIService;



@CrossOrigin
@RestController
@RequestMapping("/ssi")
public class SSI_Controller {
	
	@Autowired
	SSIService ssiservice;
	
	@GetMapping("/ssilist")
	public List<SSI> displayAll(){				
		
		return ssiservice.getAllssi();
		
	}
	@PostMapping("/register")
	public SSI addNewSSI(@Valid @RequestBody SSI ssi){
		
		  ssiservice.addNewSSI(ssi);
		 return ssi;	
	}
	
	@GetMapping("/login/{username}/{password}")
	public SSI login(@PathVariable String username,@PathVariable String password){
		  
		
		return ssiservice.login(username,password);		
		//return username+" "+password;
	}
	
	

}
