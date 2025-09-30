package com.yurisousa.portfolio.dto;

public record ContactFormDto(
        String name,
        String phone,
        String email,
        String subject,
        String message
) {
}
