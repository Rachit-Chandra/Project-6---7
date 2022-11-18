package com.example.project2.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.example.project2.model.Transfer;
import com.example.project2.repository.TransferRepository;
import com.example.project2.repository.UserRepository;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@CrossOrigin("*")
public class TransferController {
	
	@Autowired
	private UserRepository user_repo;
	
	@Autowired
	private TransferRepository trans_repo;
	
//	@PutMapping("/transfer/{accountNo1}/{accountNo2}/{amount}")
//	public Mono<ResponseEntity<Transfer>> tranferAmount(@PathVariable int accountNo1,@PathVariable int accountNo2,@PathVariable int amount){
//		
//		user_repo.findAll().filter(user -> user.getAccountNo()==(accountNo1)).doOnNext(user ->{
//			user.setBalance(user.getBalance()-amount);
//			System.out.println(user);
//		}).flatMap(user_repo::save).blockFirst();
//		
//		user_repo.findAll().filter().flatMap(user_repo::save).blockFirst();
//				
//		user_repo.findAll().filter(user -> user.getAccountNo()==(accountNo2)).doOnNext(user ->{
//			user.setBalance(user.getBalance()+amount);
//			System.out.println(user);
//		}).flatMap(user_repo::save).blockFirst();
//		
//		return trans_repo.save(new Transfer(accountNo1,accountNo2,amount)).map(ResponseEntity::ok).defaultIfEmpty(ResponseEntity.notFound().build());
//	}
	
	
	@PutMapping("/transfer")
	public Mono<ResponseEntity<Transfer>> transferAmount(@RequestBody Transfer transfer) {
		
		user_repo.findAll().filter(user -> user.getAccountNo() == (transfer.getAccountNo1())).doOnNext(user->{
			user.setBalance(user.getBalance() - transfer.getAmount());
			System.out.println(user);
		}).flatMap(user_repo::save).blockFirst();
		
		user_repo.findAll().filter(user -> user.getAccountNo()==(transfer.getAccountNo2())).doOnNext(user ->{
			user.setBalance(user.getBalance() + transfer.getAmount());
			System.out.println(user);
		}).flatMap(user_repo::save).blockFirst();
		
		return trans_repo.save(new Transfer(transfer.getAccountNo1(),transfer.getAccountNo2(),transfer.getAmount())).map(ResponseEntity::ok).defaultIfEmpty(ResponseEntity.notFound().build());
	}
	
	
	@GetMapping("/findAllTransfer")
	public Flux<Transfer> getAllDeposit(){
		return trans_repo.findAll();
	}
	
	
}
