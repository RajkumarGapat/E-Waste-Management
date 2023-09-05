package com.evanesce.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.evanesce.entity.FileDB;

@Repository
public interface FileDBRepository extends JpaRepository<FileDB, Integer> {
	FileDB findByName(String name);

//SELECT di FROM Device di JOIN di.user u WHERE u.id=:userId
	@Query("select file from FileDB file where file.request_id.reqid=:reqid")
	public FileDB getImgByReq_id(@Param("reqid") int reqid);

}