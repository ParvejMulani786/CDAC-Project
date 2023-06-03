package com.demo.FoodWasteManagementSystem.service.user;

import java.util.List;

import com.demo.FoodWasteManagementSystem.beans.user.User;

public interface UserService {
	
	public List<User> findAllUser();
	public String addUser(User u);
	public User getUser(String password,String email);


}
