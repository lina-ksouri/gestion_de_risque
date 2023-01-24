package com.example.demo.repository;

import com.example.demo.model.Entity_type;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TypeRepo extends JpaRepository<Entity_type,Integer> {
    Entity_type findByName(String name);
}
