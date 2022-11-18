package com.example.project2.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.project2.model.Withdraw;
import com.example.project2.repository.UserRepository;
import com.example.project2.repository.WithdrawRepository;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@CrossOrigin("*")
public class WithdrawController {

	@Autowired
	private UserRepository user_repo;
	
	@Autowired
	private WithdrawRepository with_repo;
	
//	@PutMapping("/withdraw/{accountNo}/{amount}")
//	public Mono<ResponseEntity<Withdraw>> withdrawAmt(@PathVariable int accountNo,@PathVariable int amount){
//		
//		user_repo.findAll().filter(user -> user.getAccountNo()==(accountNo)).doOnNext(user ->{
//			user.setBalance(user.getBalance()-amount);
//			System.out.println(user);
//		}).flatMap(user_repo::save).blockFirst();
//	
//		return with_repo.save(new Withdraw(accountNo,amount)).map(ResponseEntity::ok).defaultIfEmpty(ResponseEntity.notFound().build());
//		
//	}
	
	@PutMapping("/withdraw")
	public Mono<ResponseEntity<Withdraw>> withdrawAmt(@RequestBody Withdraw withdraw){
		
		user_repo.findAll().filter(user -> user.getAccountNo()==(withdraw.getAccountNo())).doOnNext(user ->{
			user.setBalance(user.getBalance() - withdraw.getAmount());
			System.out.println(withdraw);
		}).flatMap(user_repo::save).blockFirst();
	
		return with_repo.save(withdraw).map(ResponseEntity::ok).defaultIfEmpty(ResponseEntity.notFound().build());
		
	}
	
	@GetMapping("/findAllWithdraw")
	public Flux<Withdraw> getAllDeposit(){
		return with_repo.findAll();
	}
	
}
