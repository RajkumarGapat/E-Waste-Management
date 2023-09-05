package com.evanesce.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.evanesce.entity.User;
import com.evanesce.service.UserService;

@CrossOrigin
@RestController
public class UserController {

	@Autowired
	private UserService userService;

	@PostMapping("/findbyphone")
	public List<User> findByPhone(@RequestBody User user) {
		return userService.findByPhone(user.getPhone());
	}

	// Login
	@PostMapping("/login")
	public List<User> getUserByEmailAndPassword(@RequestBody User user) {
		return userService.getUserByEmailAndPassword(user.getEmail(), user.getPassword());
	}

	// Register
	@PostMapping("/register")
	public User insertUser(@RequestBody User user) {
		return userService.insertUser(user);
	}

	// Forget Password Mappings

	@PostMapping("/findbyemail") // For Forgot Password 1
	public List<User> findByEmail(@RequestBody User user) {
		return userService.findByEmail(user.getEmail());
	}

	@PostMapping("/forget") // For Forgot Password 2
	public List<User> forgetPassword(@RequestBody User user) {
		return userService.forgetPassword(user.getEmail(), user.getSecurityQues(), user.getSecurityAns());
	}

	@PutMapping("/updatepassword") // For Forgot Password 3
	public User updatePassword(@RequestBody User user) {
		return userService.updatePassword(user);
	}

	//Admin Module - Delete User
	@DeleteMapping("deleteuser/{uemail}") 
	public String deleteUser(@PathVariable String uemail) {
		userService.deleteUser(uemail);
		return "Deleted";
	}

	//Admin Module - Get All Users
	@GetMapping("/getallusers")
	public List<User> getAllUsers(User user) {
		return userService.getAllUsers();
	}

}