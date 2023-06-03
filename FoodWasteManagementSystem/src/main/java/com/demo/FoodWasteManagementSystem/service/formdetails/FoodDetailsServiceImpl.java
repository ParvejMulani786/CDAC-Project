package com.demo.FoodWasteManagementSystem.service.formdetails;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.FoodWasteManagementSystem.beans.formdetails.FoodDetails;
import com.demo.FoodWasteManagementSystem.dao.formdetails.FoodDetailsDao;


@Service
public class FoodDetailsServiceImpl implements FoodDetailsService {

	@Autowired
	FoodDetailsDao dao;


	@Override
	public List<FoodDetails> ShowAll() {

		return dao.findAll();
	}


	@Override
	public String addnewFoodDetails(FoodDetails fooddetails) {
		dao.save(fooddetails);
		return "Form Submitted SUCCESSFULLY";

	}


	//This is for user request list when user click on request button 
	public List<FoodDetails> getreqlist(int id) {

		List<FoodDetails> flist=dao.findAll();

		List<FoodDetails> fooddetails=new ArrayList<FoodDetails>();
		if(flist!=null)
		{

		for(FoodDetails fd:flist) {
			if(fd.getUser_id()==id && fd.getStatus().equals("pending")) {
				fooddetails.add(fd);
			}

		}
		return fooddetails;
		}
		else
		{
			return null;
		}
		
	}
	//This is for user to check the confirm list which he send to respective ngo.
	@Override
	public List<FoodDetails> getconlist(int id) {

		List<FoodDetails> flist=dao.findAll();
		List<FoodDetails> fooddetails=new ArrayList<FoodDetails>();
	if(flist!=null)
	{
		for(FoodDetails fd:flist)
		{
			if(fd.getUser_id()==id && (fd.getStatus().equals("accepted") || fd.getStatus().equals("rejected")))
			{
				fooddetails.add(fd);
			}
	     }
		
	}
	else
		{
			return null;
		}

	if(fooddetails.isEmpty())
		return null;
	
		return fooddetails;
	}



	//==========================================================================================================

	// for ngo 
	@Override
	public List<FoodDetails> DisplayReqListToNgo(int id) {
		List<FoodDetails> flist=dao.findAll();

		List<FoodDetails> fooddetails=new ArrayList<FoodDetails>();
		if(flist!=null)
		{

		for(FoodDetails fd:flist) {
			if(fd.getNgo_id()==id && fd.getStatus().equals("pending")) {
				fooddetails.add(fd);
			}

		}
		}
		else
		{
			return null;
		}
		if(fooddetails.isEmpty())
		{
			return null;
		}
		return fooddetails;
	}
	
	//this is for ngo to accept the request and set the status
	@Override
	public String getreqlistconfirm(int id) {

		List<FoodDetails> fdlist=dao.findAll();
		
		for(FoodDetails fdd:fdlist) {
			if(fdd.getFood_id()==id) {

				fdd.setStatus("accepted");
				dao.save(fdd);
				return "Confirmed";
			}
		}
		return "Not Found";
	}
	
	//this is for ngo to reject the request and set the status
	@Override
	public String getreqlistreject(int id) {
           
List<FoodDetails> fdlist=dao.findAll();
		
		for(FoodDetails fdd:fdlist) {
			if(fdd.getFood_id()==id) {

				fdd.setStatus("rejected");
				dao.save(fdd);
				return "Rejected";
			}
		}
		return "Not Found";

	}


	@Override
	public List<FoodDetails> DisplayConListToNgo(int id) {
		List<FoodDetails> flist=dao.findAll();

		List<FoodDetails> fooddetails=new ArrayList<FoodDetails>();
		if(flist!=null)
		{

		for(FoodDetails fd:flist) {
			if(fd.getNgo_id()==id && (fd.getStatus().equals("accepted") || fd.getStatus().equals("rejected"))) {
				fooddetails.add(fd);
			}

		}
		return fooddetails;
		}
		else
		{
			return null;
		}
		
	}


	//===================================================================================================



	//this functions for ssi to confirm list and check  the status wheather pending or confirmed
	@Override
	public String GetreqlistconfirmBySsi(int id) {
    List<FoodDetails> fdlist=dao.findAll();
		
		for(FoodDetails fdd:fdlist) {
			if(fdd.getFood_id()==id) {

				fdd.setStatus("accepted");
				dao.save(fdd);
				return "Confirmed";
			}
		}
		return "Not Found";
	}


	//this functions for ssi to reject list and check  the status wheather pending or confirmed
		@Override
		public String GetreqlistRejectBySsi(int id) {
	    List<FoodDetails> fdlist=dao.findAll();
			
			for(FoodDetails fdd:fdlist) {
				if(fdd.getFood_id()==id) {

					fdd.setStatus("rejected");
					dao.save(fdd);
					return "Rejected";
				}
			}
			return "Not Found";
		}

	@Override
	public List<FoodDetails> DisplayReqListToSsi(int id) {

		List<FoodDetails> flist=dao.findAll();

		List<FoodDetails> fooddetails=new ArrayList<FoodDetails>();
		if(flist!=null)
		{

		for(FoodDetails fd:flist) {
			if(fd.getSsi_id()==id && fd.getStatus().equals("pending")) {
				fooddetails.add(fd);
			}

		}
		}
		else
		{
			return null;
		}
		if(fooddetails.isEmpty())
		{
			return null;
		}
		return fooddetails;
	}



	@Override
	public List<FoodDetails> DisplayConListToSsi(int id) {
		List<FoodDetails> flist=dao.findAll();

		List<FoodDetails> fooddetails=new ArrayList<FoodDetails>();
		if(flist!=null)
		{

		for(FoodDetails fd:flist) {
			if(fd.getSsi_id()==id && (fd.getStatus().equals("accepted") || fd.getStatus().equals("rejected"))) {
				fooddetails.add(fd);
			}

		}
		}
		else
		{
			return null;
		}
		return fooddetails;
	}



}





