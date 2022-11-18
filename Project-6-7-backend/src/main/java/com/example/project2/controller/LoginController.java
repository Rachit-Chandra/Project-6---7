package com.example.project2.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.project2.model.Login;
import com.example.project2.repository.LoginRepository;

import reactor.core.publisher.Mono;

@RestController
@CrossOrigin("*")
public class LoginController {

	@Autowired
	private LoginRepository repo;
	
//	@PostMapping("/signup")
//	public boolean signup(@RequestBody Login login) {
//		System.out.println(login);
////		if(repo.save(login) != null) {
////			return true;
////		}
////		return false;
//		repo.save(login);
//		return true;
//	}
	@PostMapping("/signup")
	public Mono<Login> signup(@RequestBody Login login) {
		System.out.println(login);
		return repo.save(login);
	}
	
	@GetMapping("/login/{accno}")
	public Mono<Login> login(@PathVariable int accno){
		
		System.out.println(accno);
		return repo.findById(accno);
		
		
	
	
	}
	
}
