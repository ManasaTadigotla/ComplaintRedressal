package com.abc.complaintredressal.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.abc.complaintredressal.model.User;
import com.abc.complaintredressal.model.Complaint;
import com.abc.complaintredressal.model.UserRole;
import com.abc.complaintredressal.repository.UserRepository;
import com.abc.complaintredressal.repository.UserRoleRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private UserRoleRepository userRoleRepository;		
	
	
	public List<User> findAllUsers()
	{
		return userRepository.findAll();
	}
	
	public User findUserByUserName(String userName)
	{
		return userRepository.findById(userName).get();
	}
	
	public void deleteUser(String userName)
	{
		userRepository.deleteById(userName);
	}
	
	public User registerNewUser(User user)
	{
		return userRepository.save(user);		
	}
	
	public User assignRoleToUser(String userName,Long roleId)
	{
		User user=userRepository.findById(userName).get();
		UserRole role=userRoleRepository.findById(roleId).get();
		user.setRole(role);
		return userRepository.save(user);		
	}
	
	public List<Complaint> getComplaintsRaisedByUser(String userName)
	{
		User user= userRepository.findById(userName).get();
		return user.getComplaints();
	}
	
	
}
