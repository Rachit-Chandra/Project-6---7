package com.example.project2.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.example.project2.model.Deposit;
import com.example.project2.repository.DepositRepository;
import com.example.project2.repository.UserRepository;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@CrossOrigin("*")
public class DepositController {
	
	@Autowired
	private DepositRepository depo_repo;
	
	@Autowired
	private UserRepository user_repo;
	
//@PutMapping("/deposit/{accountNo}/{amount}")
//	public Mono<ResponseEntity<Deposit>> depositAmt(@PathVariable int accountNo, @PathVariable int amount ) {
//		
//		
//		user_repo.findAll().filter(user -> user.getAccountNo()==(accountNo)).doOnNext(user ->{
//			user.setBalance(user.getBalance()+amount);
//			System.out.println(user);
//		}).flatMap(user_repo::save).blockFirst();
//
//		
//		return depo_repo.save(new Deposit(accountNo,amount)).map(ResponseEntity::ok).defaultIfEmpty(ResponseE	ntity.notFound().build());
//		
//	}
	@PutMapping("/deposit")
	public Mono<ResponseEntity<Deposit>> depositAmt(@RequestBody Deposit deposit) {
	user_repo.findAll().filter(user -> user.getAccountNo()==(deposit.getAccountNo())).doOnNext(user ->{
			user.setBalance(user.getBalance()+deposit.getAmount());
			System.out.println(deposit);
//			depo_repo.save(deposit);
		}).flatMap(user_repo::save).blockFirst();
	return depo_repo.save(deposit).map(ResponseEntity::ok).defaultIfEmpty(ResponseEntity.notFound().build());
	}
	
	@GetMapping("/findAllDeposit")
	public Flux<Deposit> getAllDeposit(){
		return depo_repo.findAll();
	}
	
	
}
	
		

