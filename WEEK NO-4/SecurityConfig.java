package com.cognizant.spring_learn.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable()) // ❌ Turn off CSRF for testing
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/authenticate").permitAll() // 🟢 Allow /authenticate
                .anyRequest().authenticated() // 🔒 All other URLs need login
            )
            .httpBasic(Customizer.withDefaults()); // 🧪 Enable basic auth with -u user:pwd
        return http.build();
    }
}

