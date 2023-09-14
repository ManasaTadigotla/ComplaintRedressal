package com.abc.complaintredressal.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.abc.complaintredressal.model.Complaint;
import com.abc.complaintredressal.model.ComplaintStatus;
import com.abc.complaintredressal.service.ComplaintService;
import com.fasterxml.jackson.annotation.JsonIgnore;

@RestController
@CrossOrigin
public class ComplaintController {
	
	@Autowired
	ComplaintService complaintService;
	
	//@PreAuthorize("hasRole('Customer')")
	@GetMapping("allComplaints")
	public List<Complaint> getAllComplaints()
	{
		return complaintService.getAllCommplaints();
	}
	
	@GetMapping("complaint/{complaintId}")
	public Complaint getComplaintById(@PathVariable Long complaintId)
	{
		return complaintService.getComplaintsById(complaintId);
	}	

	@GetMapping("updatecomplaintstatus/{complaintId}/{status}")	
	public Complaint updateComplaintStatus(@PathVariable Long complaintId,@PathVariable ComplaintStatus status)
	{
		return complaintService.UpdateComplaintStatus(complaintId,status);
	}
	
	//@PreAuthorize("hasRole('Admin')")
	@GetMapping("deletecomplaint/{complaintId}")
	public String deleteComplaint(@PathVariable Long complaintId)
	{
		Complaint complaint=complaintService.getComplaintsById(complaintId);
		if(complaint.getStatus().equals(ComplaintStatus.RESOLVED))
		{
			complaintService.deleteComplaint(complaintId);
			return "success";
		}
		else
		{
			return "not resolved";
		}
	}
	
	
	
	
}
