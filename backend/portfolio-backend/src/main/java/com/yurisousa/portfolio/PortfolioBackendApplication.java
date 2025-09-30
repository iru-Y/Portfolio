package com.yurisousa.portfolio;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@Slf4j
@SpringBootApplication
public class PortfolioBackendApplication {
	public static void main(String[] args) {
		log.info("Tentando iniciar aplicação . . .");
		SpringApplication.run(PortfolioBackendApplication.class, args);
		log.info("Aplicação iniciada");
	}
}