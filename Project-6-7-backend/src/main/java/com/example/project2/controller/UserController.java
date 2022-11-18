package com.example.project2.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;

import com.example.project2.model.Users;
//import com.example.project2.model.Withdraw;
import com.example.project2.repository.UserRepository;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@CrossOrigin("*")
public class UserController {
	
	@Autowired
	private UserRepository repository;
	
	@PostMapping("/insert")
	public Mono<ResponseEntity<Users>> insertData(@RequestBody Users user) {
		System.out.println(user);
		
		return repository.save(user).map(ResponseEntity::ok).defaultIfEmpty(ResponseEntity.notFound().build());
	}
	
	@GetMapping("viewBalance/{accNo}")
	public Mono<ResponseEntity<Users>> displayBalance(@PathVariable int accNo){
		return repository.findById(accNo).map(ResponseEntity::ok).defaultIfEmpty(ResponseEntity.notFound().build());
	}
	
	@DeleteMapping("delete/{accNo}")
	public Mono<Void> deleteUser(@PathVariable int accNo){
		return repository.deleteById(accNo);
	}
	
//	@PostMapping("login")
//	public boolean loginCheck(@RequestBody Users users) {
//		
//		return true;
//	}
	
	@GetMapping("/findAllUsers")
	public Flux<Users> getAllDeposit(){
		return repository.findAll();
	}

}
