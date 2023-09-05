package com.evanesce.service;

import java.util.List;

import com.evanesce.entity.Agent;
import com.evanesce.entity.Request;

public interface RequestService {
	public Request insertRequests(Request request);

	public List<Request> getAllRequests();

	public List<Request> getRequestsByEmail(String email);

	public List<Request> getRequestById(int reqid);

	public List<Request> findAgentRequests(Agent agent);

	public Request updateRequests(int id, Request request);

	public Request updatePayment(Request request, int reqid);

	public void deleteRequest(int id);

	public List<Request> pendingRequests(String email, boolean status);

	public List<Request> viewAllPendingRequests(boolean status);

	public List<Request> viewDonations(String email, boolean status);

	public List<Request> viewAllDonations(boolean status);

	public String assignAgentIdToRequest(int agentid, int requestid);

	public Request updatePendingRequestByUser(Request request);

	public boolean checkImageUploadStatus(int imgreqid);

}
