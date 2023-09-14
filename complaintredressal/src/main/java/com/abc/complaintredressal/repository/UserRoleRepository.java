package com.abc.complaintredressal.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.abc.complaintredressal.model.UserRole;

public interface UserRoleRepository extends JpaRepository<UserRole, Long> {

	public UserRole findByRoleName(String roleName);
}
