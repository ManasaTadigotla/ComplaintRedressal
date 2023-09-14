package com.abc.complaintredressal.controller;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.abc.complaintredressal.model.Complaint;
import com.abc.complaintredressal.model.User;
import com.abc.complaintredressal.model.UserRole;
import com.abc.complaintredressal.repository.ComplaintRepository;
import com.abc.complaintredressal.repository.UserRepository;
import com.abc.complaintredressal.repository.UserRoleRepository;
import com.abc.complaintredressal.service.ComplaintService;
import com.abc.complaintredressal.service.UserService;

import jakarta.jws.soap.SOAPBinding.Use;

@RestController
@CrossOrigin
public class UserController {

	@Autowired
	private UserService userService;
	@Autowired
	ComplaintService complaintService;
	
	@Autowired
	ComplaintRepository complaintRepo;
	@Autowired
	private UserRepository userReposoitory;
	
	@Autowired
	private UserRoleRepository userRoleReposoitory;
	
	@GetMapping("allusers")
	public List<User> getAllUsers()
	{
		return userService.findAllUsers();
	}
	
	@GetMapping("engineersByPincode/{pincode}")
	public List<User> getEnginneersByPincode(@PathVariable Long pincode)
	{
		List<User> users= userRoleReposoitory.findByRoleName("ENGINEER").getUsers();
		//users= users.stream().filter(user->user.getPincode().equals(pincode)).collect(Collectors.toList());
		return users;
		//userReposoitory.findByPincode(pincode);
	}
	
	@GetMapping("user/{userName}")
	public User getUserByUserName(@PathVariable String userName)
	{
		return userService.findUserByUserName(userName);
	}
	
	@PostMapping("/registernewuser")
	public User registerNewUser(@RequestBody User user)
	{
		return userService.registerNewUser(user);
	}
	
	//@PreAuthorize("hasRole('Admin')")
	@GetMapping("assignroletouser/{userName}/{roleId}")
	public User assignRole(@PathVariable String userName,@PathVariable Long roleId)
	{
		return userService.assignRoleToUser(userName,roleId);
	}
	
	//@PreAuthorize("hasRole('Admin')")
	@DeleteMapping("deleteuser/{userName}")
	public int deleteUser(@PathVariable String userName)
	{
		userService.deleteUser(userName);
		return 1;
	}
	
	@PostMapping("newComplaint")
	public Complaint saveNewComplaint(@RequestBody Complaint complaint)
	{
		return complaintRepo.save(complaint);
	}
	
	@GetMapping("addComplaint/{userName}")
	public Complaint addNewComplaint(@PathVariable String userName,@RequestBody Complaint complaint)
	{
		User user= userService.findUserByUserName(userName);
		user.addComplaint(complaint);	
		complaint.setCustomer(user);
		userReposoitory.save(user);
		return complaintService.saveNewComplaint(userName, complaint);			
	}	
	
	@GetMapping("complaintsbycustomer/{customerUserName}")
	public List<Complaint> getComplaintsByCustomer(@PathVariable String customerName)
	{
		User user= userService.findUserByUserName(customerName);
		return user.getComplaints();
		
	}
	
	@GetMapping("complaintsAssignedToEngineer/{engineerUserName}")
	public List<Complaint> complaintByEngineer(@PathVariable String engineerUserName)
	{
		User user=userService.findUserByUserName(engineerUserName);
		return user.getAssignedComplaints();
//		complaintService.getAllCommplaints().stream().filter(complaint->{
//			complaint.getEngineer().getUserName().equals(engineerUserName)
//		})
		//return null;
	}
	
	@GetMapping("assigncomplainttoengineer/{complaintId}/{engineerUserName}")
	public void assignComplaintToEngineer(@PathVariable Long complaintId,@PathVariable String engineerUserName)
	{
		Complaint complaint= complaintService.getComplaintsById(complaintId);
		User user=userService.findUserByUserName(engineerUserName);
		user.addComplaint(complaint);
		
	}
	


}
