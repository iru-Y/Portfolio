package com.yurisousa.portfolio.controllers;

import com.yurisousa.portfolio.dto.ContactFormDto;
import com.yurisousa.portfolio.services.EmailService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "*")
public class EmailController {

    private final EmailService emailService;

    public EmailController(EmailService emailService) {
        this.emailService = emailService;
    }

    @PostMapping
    public ResponseEntity<String> sendContact(@RequestBody ContactFormDto contactFormDto){
        try {
            emailService.sendContactEmail(contactFormDto);
            log.info("Email enviado com sucesso para: {}", contactFormDto.email());
            return ResponseEntity.ok("Mensagem enviada com sucesso!");
        } catch (Exception e) {
            log.error("Erro ao enviar email: {}", e.getMessage(), e);
            return ResponseEntity.status(500).body("Erro ao enviar mensagem.");
        }
    }
}
