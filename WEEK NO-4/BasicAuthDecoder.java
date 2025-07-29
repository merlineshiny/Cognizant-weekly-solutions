package com.cognizant.spring_learn.service;

import java.util.Base64;

public class BasicAuthDecoder {
    public static String[] decode(String authHeader) {
        if (authHeader != null && authHeader.startsWith("Basic ")) {
            String base64Credentials = authHeader.substring("Basic ".length());
            byte[] credDecoded = Base64.getDecoder().decode(base64Credentials);
            String credentials = new String(credDecoded);
            return credentials.split(":", 2);
        }
        throw new RuntimeException("Invalid Authorization header");
    }
}

