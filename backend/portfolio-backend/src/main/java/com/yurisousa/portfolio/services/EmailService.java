package com.yurisousa.portfolio.services;

import com.yurisousa.portfolio.dto.ContactFormDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class EmailService {

    private final JavaMailSender javaMailSender;

    public EmailService(JavaMailSender javaMailSender) {
        this.javaMailSender = javaMailSender;
    }

    public void sendContactEmail (ContactFormDto contactFormDto){
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo("yuri_matteus@hotmail.com");
        message.setSubject("Nova mensagem do contato: " + contactFormDto.subject());
        message.setText(
                "Nome: " + contactFormDto.name() + "\n" +
                        "Telefone: " + contactFormDto.phone() + "\n" +
                        "Email: " + contactFormDto.email() + "\n\n" +
                        "Mensagem:\n" + contactFormDto.message()
        );
        log.info("Tentando enviar a mensagem para o email");
        javaMailSender.send(message);
        log.info("Email enviado!");
    }
}
