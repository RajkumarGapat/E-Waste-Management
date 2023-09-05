package com.evanesce.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.evanesce.entity.Agent;

public interface AgentDao extends JpaRepository<Agent, Integer> {
	public Agent findByEmailAndPassword(String email, String password);

	public List<Agent> findByEmail(String email);

	public List<Agent> findByCity(String city);

	public Agent findById(int id);
}
