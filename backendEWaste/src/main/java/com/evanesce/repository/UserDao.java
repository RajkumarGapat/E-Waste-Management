package com.evanesce.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.evanesce.entity.User;

@Repository
public interface UserDao extends JpaRepository<User, String> {

	public List<User> findByEmailAndPassword(String email, String password);

	public List<User> findByEmail(String email);

	public List<User> findByPhone(String phone);

	public List<User> findByEmailAndSecurityQuesAndSecurityAns(String email, String securityQues, String securityAns);

}
