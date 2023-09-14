package com.abc.complaintredressal.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.abc.complaintredressal.model.UserRole;
import com.abc.complaintredressal.repository.UserRoleRepository;

@Service
public class RoleService {
	
	@Autowired
	UserRoleRepository userRoleRepository;

	public UserRole addNewRole(UserRole role)
	{
		return userRoleRepository.save(role);
	}
	
	public void deleteUserRole(UserRole role)
	{
		if(userRoleRepository.existsById(role.getRoleId()))
		{
			userRoleRepository.deleteById(role.getRoleId());
		}
		else
		{
			throw new IllegalArgumentException("This Role is not exists");
		}
	}
	
	public List<UserRole> finAllRoles()
	{
		return userRoleRepository.findAll();
	}
}
