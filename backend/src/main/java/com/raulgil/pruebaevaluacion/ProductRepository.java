package com.raulgil.pruebaevaluacion;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    // No necesitamos escribir ningún método, JpaRepository nos da 'findAll()'
}