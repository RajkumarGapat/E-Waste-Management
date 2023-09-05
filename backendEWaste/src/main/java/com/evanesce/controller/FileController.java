package com.evanesce.controller;


import java.util.List;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.evanesce.message.ResponseFile;
import com.evanesce.message.ResponseMessage;
import com.evanesce.entity.FileDB;
import com.evanesce.service.FileStorageService;
//import com.project.service.RequestService;

@Controller
@CrossOrigin // ("http://localhost:3000")
public class FileController {

	@Autowired
	private FileStorageService storageService;
	
	//@Autowired
	//private RequestService requestService;
	
	@PostMapping("/upload")
	public ResponseEntity<ResponseMessage> uploadFile(@RequestParam String requestid,@RequestParam("file") MultipartFile file) {
		String message = "";
		try {
			System.out.println("in try block mapping request");
			int reqimgid=Integer.parseInt(requestid);
			System.out.println(requestid+"Reques id"+"--->convert to integer--->"+reqimgid);
			// Request u = new ObjectMapper().readValue(requestdetails, Request.class);
			// System.out.println("request object"+u);
			// requestService.insertRequests(u);

			storageService.store(file,reqimgid);
			

			message = "Uploaded the file successfully: " + file.getOriginalFilename();
			return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));
		} catch (Exception e) {
			message = "Could not upload the file: " + file.getOriginalFilename() + "!";
			return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));
		}
	}

	@GetMapping("/files")
	public ResponseEntity<List<ResponseFile>> getListFiles() {
		System.out.println("in list files");
		List<ResponseFile> files = storageService.getAllFiles().map(dbFile -> {
			String fileDownloadUrl = ServletUriComponentsBuilder.fromCurrentContextPath() // Prepares a URL from the
																							// host, port, scheme, and
					// context path of the given HttpServletRequest.eg : http://localhost:8080/
					.path("/files/")// apends the resource name eg : http://localhost:8080/files
					.path(dbFile.getId().toString()) // appends file id(resource id) http://localhost:8080/files/1
					.toUriString();
			System.out.println("url " + fileDownloadUrl);

			return new ResponseFile(dbFile.getName(), fileDownloadUrl, dbFile.getType(), dbFile.getData().length);
		}).collect(Collectors.toList());

		return ResponseEntity.status(HttpStatus.OK).body(files);
	}

	@GetMapping("/files/{id}")
	public ResponseEntity<Object> getFile(@PathVariable Integer id) {
		System.out.println("in get file");
		FileDB fileDB = storageService.getFile(id);
         
		return ResponseEntity.ok()
				.header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + fileDB.getName() + "\"")
				.body(fileDB.getData());
	}
}