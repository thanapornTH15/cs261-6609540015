package com.example.crud;

import com.example.crud.Account;
import com.example.crud.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class AccountController {

    @Autowired
    private AccountRepository AccountRepository;

    @GetMapping
    public List<Account> getAllUsers() {
        return AccountRepository.findAll();
    }

    @PostMapping("/add")
    /*public Account createStudent(@RequestBody Account user) {
       return AccountRepository.save(user); 
    }
    */
    public ResponseEntity<String> createStudent(@RequestBody Account user) {
        AccountRepository.save(user);
        try {
            AccountRepository.save(user);
            return ResponseEntity.status(HttpStatus.CREATED).body("Student saved successfully!");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                                 .body("Failed to save student: " + e.getMessage());
        }
    }
}
