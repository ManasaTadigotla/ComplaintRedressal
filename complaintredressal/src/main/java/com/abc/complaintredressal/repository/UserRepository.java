package com.abc.complaintredressal.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.abc.complaintredressal.model.User;

public interface UserRepository extends JpaRepository<User, String>{

}
