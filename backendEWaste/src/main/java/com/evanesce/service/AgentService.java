package com.evanesce.service;

import java.util.List;
import com.evanesce.entity.Agent;

public interface AgentService {
	public Agent hireAgent(Agent a);

	public Agent loginAgent(String email, String password);

	public List<Agent> getAllAgents();

	public void deleteAgent(int id);

	public Agent updateAgent(int id, Agent agent);

	public List<Agent> findByEmail(String email);

	public List<Agent> findByCity(String city);

	public String changeStatus(int id);
}