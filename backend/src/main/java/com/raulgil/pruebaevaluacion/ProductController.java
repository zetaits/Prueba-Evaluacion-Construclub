package com.raulgil.pruebaevaluacion;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api") // Todos los endpoints aquí empezarán con /api
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @CrossOrigin(origins = "*")
    @GetMapping("/productos")
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }
}
