package com.abc.complaintredressal.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

@Entity
public class User {

	@Id
	private String userName;
	private String fullName;
	private String userpassword;
	private Long pincode;
	private Long phone;
	@JsonManagedReference(value = "userRoleRef")	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="roleId")
	private UserRole role;
	
	//@JsonManagedReference(value = "userComplaintRef")
	@JsonIgnore
	@OneToMany(mappedBy = "customer")
	private List<Complaint> complaints;

	@JsonIgnore
    @JsonBackReference(value = "engineerComplaintRef")
	@OneToMany(mappedBy = "engineer")
	private List<Complaint> assignedComplaints;
	
	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public String getUserpassword() {
		return userpassword;
	}

	public void setUserpassword(String userpassword) {
		this.userpassword = userpassword;
	}

	public Long getPhone() {
		return phone;
	}

	public void setPhone(Long phone) {
		this.phone = phone;
	}

	public UserRole getRole() {
		return role;
	}

	public void setRole(UserRole role) {
		this.role = role;
	}

	public List<Complaint> getComplaints() {
		return complaints;
	}

	public void addComplaint(Complaint complaint)
	{
		this.complaints.add(complaint);
		complaint.setCustomer(this);
	}

	public Long getPincode() {
		return pincode;
	}

	public void setPincode(Long pincode) {
		this.pincode = pincode;
	}

	public List<Complaint> getAssignedComplaints() {
		return assignedComplaints;
	}

	public void setAssignedComplaints(List<Complaint> assignedComplaints) {
		this.assignedComplaints = assignedComplaints;
	}

	public User() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}
