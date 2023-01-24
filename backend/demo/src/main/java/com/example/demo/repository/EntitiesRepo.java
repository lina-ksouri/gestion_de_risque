package com.example.demo.repository;

import com.example.demo.model.Entities;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface EntitiesRepo extends JpaRepository<Entities,Integer> {
    Optional<Entities> findByName(String name);
}
