package com.luv2code.springbootlibrary.controller;

import com.luv2code.springbootlibrary.dao.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/db")
public class DbCheckController {

    @Autowired
    private BookRepository bookRepository;

    @GetMapping("/status")
    public Map<String, Object> checkDbStatus() {
        Map<String, Object> response = new HashMap<>();
        try {
            long count = bookRepository.count();
            response.put("status", "success");
            response.put("table", "book");
            response.put("recordCount", count);
            response.put("message", count > 0 ? "Table exists and has data" : "Table exists but is empty");
            return response;
        } catch (Exception e) {
            response.put("status", "error");
            response.put("message", "Error accessing database: " + e.getMessage());
            return response;
        }
    }
}