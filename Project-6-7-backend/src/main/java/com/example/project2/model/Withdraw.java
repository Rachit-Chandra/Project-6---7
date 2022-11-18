package com.example.project2.model;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Component
@Document("withdrawData")
public class Withdraw {
	
	private int accountNo;
	private String customerName;
	private int amount;

}
