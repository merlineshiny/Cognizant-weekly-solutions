package com.cognizant.spring_learn.service;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Service;
import java.util.Date;

@Service
public class JwtUtil {
    private String secretKey = "mysecret"; // shhh! secret word!

    public String generateToken(String username) {
        return Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 10)) // 10 minutes
                .signWith(SignatureAlgorithm.HS256, secretKey)
                .compact();
    }
}

