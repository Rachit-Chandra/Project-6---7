package com.example.project2.repository;

import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.stereotype.Repository;

import com.example.project2.model.Transfer;

@Repository
public interface TransferRepository extends ReactiveMongoRepository<Transfer, Integer> {

}
