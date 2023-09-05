package com.evanesce.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.evanesce.entity.Request;
import com.evanesce.service.RequestService;

@CrossOrigin
@RestController
public class RequestController {

	@Autowired
	private RequestService requestService;

	@PostMapping("/requests")
	public Request insertRequests(@RequestBody Request request) {
		System.out.println(request.getQuantity());
		System.out.println(request.getPayment());
		return requestService.insertRequests(request);
	}

	@GetMapping("/requests")
	public List<Request> getAllRequests() {
		return requestService.getAllRequests();
	}

	@GetMapping("/requests/{remail}")
	public List<Request> getRequestsByEmail(@PathVariable String remail) {
		return requestService.getRequestsByEmail(remail);
	}

	@GetMapping("/getrequests/{rid}")
	public List<Request> getRequestsById(@PathVariable int rid) {
		return requestService.getRequestById(rid);
	}

	@PostMapping("/pendingrequests")
	public List<Request> getPendingRequests(@RequestBody Request request) {
		return requestService.pendingRequests(request.getEmail(), false);
	}

	@GetMapping("/viewallpendingrequests")
	public List<Request> getPendingRequests(boolean status) {
		return requestService.viewAllPendingRequests(false);
	}

	@GetMapping("/viewcollections")
	public List<Request> viewAllDonations(boolean status) {
		return requestService.viewAllDonations(status);
	}

	@PostMapping("/viewdonations")
	public List<Request> viewDonations(@RequestBody Request request) {
		return requestService.viewDonations(request.getEmail(), true);
	}

	@PutMapping("/requests/{id}")
	public Request updateRequests(@PathVariable int id, @RequestBody Request request) {
		System.out.println("IN UPDATE PAGE");
		System.out.print("In update Request : Agent id " + id + " Request " + request);
		return requestService.updateRequests(id, request);
	}

	@PutMapping("/pendingrequestbyUser")
	public Request updateRequestsByDonor(@RequestBody Request request) {
		return requestService.updatePendingRequestByUser(request);
	}

	@PutMapping("/requestspay/{reqid}")
	public Request updateRequests(@PathVariable String reqid, @RequestBody Request request) {
		System.out.print("In update Request : id" + reqid + " Request " + request);
		return requestService.updatePayment(request, Integer.parseInt(reqid));
	}

	@DeleteMapping("/requests/{rid}")
	public String deleteRequest(@PathVariable int rid) {
		requestService.deleteRequest(rid);
		return "Deleted";
	}

	@GetMapping("/imageuploadstatus/{imgreqid}")
	public boolean imageuploadstatus(@PathVariable String imgreqid) {
		System.out.println(imgreqid + "image Request ID" + imgreqid.getClass().getName());
		int img_req_id = Integer.parseInt(imgreqid);
		return requestService.checkImageUploadStatus(img_req_id);

	}

}
