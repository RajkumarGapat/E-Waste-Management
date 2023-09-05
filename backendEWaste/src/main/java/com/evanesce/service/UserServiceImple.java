package com.evanesce.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.evanesce.entity.User;
import com.evanesce.repository.UserDao;

@Service
public class UserServiceImple implements UserService {

	@Autowired
	private UserDao userDao;

	@Override
	public User insertUser(User user) {
		return userDao.save(user);
	}

	@Override
	public List<User> getUserByEmailAndPassword(String email, String password) {
		return userDao.findByEmailAndPassword(email, password);
	}

	@Override
	public List<User> findByPhone(String phone) {
		return userDao.findByPhone(phone);
	}

	//Admin - Get All Users
	@Override
	public List<User> getAllUsers() {

		return this.userDao.findAll();
	}

	//Admin - Delete User
	@Override
	public void deleteUser(String email) {
		User user = userDao.getReferenceById(email);
		userDao.delete(user);
	}

	
	//Forgot password 1
	@Override
	public List<User> findByEmail(String email) {
		return userDao.findByEmail(email);
	}

	//Forgot password 2
	@Override
	public List<User> forgetPassword(String email, String securityQues, String securityAns) {
		return userDao.findByEmailAndSecurityQuesAndSecurityAns(email, securityQues, securityAns);
	}

	//Forgot password 3
	@Override
	public User updatePassword(User user) {
		User u = userDao.getReferenceById(user.getEmail());
		u.setPassword(user.getPassword());
		return userDao.save(u);
	}

}
