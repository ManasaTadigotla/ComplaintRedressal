package com.abc.complaintredressal.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.abc.complaintredressal.model.Complaint;
import com.abc.complaintredressal.model.User;

public interface ComplaintRepository extends JpaRepository<Complaint, Long>{
	
	//public List<Complaint> find();
	public List<Complaint> findByCustomer(User customer);

}
