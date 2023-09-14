package com.abc.complaintredressal.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.abc.complaintredressal.model.Complaint;
import com.abc.complaintredressal.model.ComplaintStatus;
import com.abc.complaintredressal.repository.ComplaintRepository;

@Service
public class ComplaintService {

	@Autowired
	ComplaintRepository complaintRepo;
	
	public List<Complaint> getAllCommplaints()
	{
		return complaintRepo.findAll();
	}
	
	public Complaint getComplaintsById(Long complaintId)
	{
		if(complaintId!=null)
		{
			return complaintRepo.findById(complaintId).get();
		}
		else 
			return null;		
	}
	
	public Complaint saveNewComplaint(String usreName,Complaint complaint)
	{
		return complaintRepo.save(complaint);
	}
	
	public Complaint UpdateComplaintStatus(Long complaintId,ComplaintStatus status)
	{
		Complaint complaint=complaintRepo.findById(complaintId).get();
		complaint.setStatus(status);
		return complaintRepo.save(complaint);		
	}
	
	public void deleteComplaint(Long complaintId)
	{
		if(complaintRepo.existsById(complaintId))
		{
			complaintRepo.deleteById(complaintId);
		}
	}
	
}
