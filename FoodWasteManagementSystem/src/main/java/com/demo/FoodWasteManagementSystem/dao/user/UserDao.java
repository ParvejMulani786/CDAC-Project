package com.demo.FoodWasteManagementSystem.dao.user;

import org.springframework.data.jpa.repository.JpaRepository;

import com.demo.FoodWasteManagementSystem.beans.user.User;

public interface UserDao extends JpaRepository<User, Integer> {

}
