package com.demo.FoodWasteManagementSystem.dao.ngo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.FoodWasteManagementSystem.beans.ngo.NGO;



@Repository
public interface NGODao extends JpaRepository<NGO,Integer>{
	

}
