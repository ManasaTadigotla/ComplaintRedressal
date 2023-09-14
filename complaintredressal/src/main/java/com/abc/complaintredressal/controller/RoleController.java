package com.abc.complaintredressal.controller;

import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.abc.complaintredressal.model.User;
import com.abc.complaintredressal.model.UserRole;
import com.abc.complaintredressal.repository.UserRoleRepository;
import com.abc.complaintredressal.service.RoleService;

@RestController
@CrossOrigin
public class RoleController {

	@Autowired
	private RoleService roleservice;
	@Autowired
	private UserRoleRepository roleRepo;

	//@PreAuthorize("hasRole('Admin')")
	@PostMapping({"/addnewrole"})
	public UserRole addNewRole(@RequestBody UserRole role) {
		return roleservice.addNewRole(role);
		
	}
	@GetMapping("allroles")
	public List<UserRole> getAllRoles()
	{
		return roleservice.finAllRoles();
	}
	
	@GetMapping("usersbyrolename/{roleName}")
    public List<User> getUserByRole(@PathVariable String rolename) {
	  UserRole role=(UserRole) roleRepo.findByRoleName(rolename);
	  return role.getUsers();
	}
    
	@GetMapping("usersbyrolenameandpincode/{roleName}/{pincode}")
    public List<User> getUserByRoleAndPincode(@PathVariable String roleName,@PathVariable Long pincode)
    {
    	List<User> users=getUserByRole(roleName);
    	if(!users.isEmpty())
    	{
    		return users.stream().filter(user->user.getPincode()==pincode).collect(Collectors.toList());
    	}
    	else
    	{
    		return null;
    	}
    	
    }
    

}
