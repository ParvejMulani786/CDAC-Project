package com.demo.FoodWasteManagementSystem.dao.formdetails;



import org.springframework.data.jpa.repository.JpaRepository;

import com.demo.FoodWasteManagementSystem.beans.formdetails.FoodDetails;

public interface FoodDetailsDao extends JpaRepository <FoodDetails,Integer> {

}
