package com.abc.complaintredressal.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Complaint {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long complaintId;
	@Enumerated(EnumType.STRING)
	private ComplaintType complaintType;
	private String subject;
	private String description;
	private String address;
	private Long pincode;
	@Enumerated(EnumType.STRING)
	private ComplaintStatus status;
	
	@JsonBackReference(value = "userComplaintRef")
	@ManyToOne
	@JoinColumn(name="customerId")
	private User customer;
	
	@JsonManagedReference(value="engineerComplaintRef")
	@ManyToOne
	@JoinColumn(name="engUserName")
	private User engineer;

	public Long getComplaintId() {
		return complaintId;
	}

	public void setComplaintId(Long complaintId) {
		this.complaintId = complaintId;
	}

	public ComplaintType getComplaintType() {
		return complaintType;
	}

	public void setComplaintType(ComplaintType complaintType) {
		this.complaintType = complaintType;
	}

	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Long getPincode() {
		return pincode;
	}

	public void setPincode(Long pincode) {
		this.pincode = pincode;
	}

	public ComplaintStatus getStatus() {
		return status;
	}

	public void setStatus(ComplaintStatus status) {
		this.status = status;
	}

	public User getCustomer() {
		return customer;
	}

	public void setCustomer(User customer) {
		this.customer = customer;
	}

	public User getEngineer() {
		return engineer;
	}

	public void setEngineer(User engineer) {
		this.engineer = engineer;
	}
	
	public void assignComplaint(User engineer)
	{
		engineer.addComplaint(this);
		this.engineer=engineer;
	}

	public Complaint() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}
