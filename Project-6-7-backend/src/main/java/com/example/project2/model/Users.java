package com.example.project2.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.stereotype.Component;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


@Data
@Getter
@Setter
@Component
@ToString
@Document("userData")
public class Users {
	
	@Id
	private int accountNo;
	private String customerName;
	private int balance;
	private String ifscCode;
	private String customerNo;
	private String phoneNo;

}
