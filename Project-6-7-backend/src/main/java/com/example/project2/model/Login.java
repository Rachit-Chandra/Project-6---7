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
@Document("loginData")
public class Login {

	@Id
	private int accno;
	private String username;
	private String email;
	private String password;
	
}
