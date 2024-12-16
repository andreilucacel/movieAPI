package com.example.movies

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@SpringBootApplication
class MoviesApplication {

    static void main(String[] args) {
        SpringApplication.run(MoviesApplication, args)
    }

}
