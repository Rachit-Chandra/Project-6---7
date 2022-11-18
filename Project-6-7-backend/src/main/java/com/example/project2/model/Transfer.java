package com.example.project2.model;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Component
@Document("transferData")
public class Transfer {

	private int accountNo1;
	private int accountNo2;
	private int amount;
	
}
