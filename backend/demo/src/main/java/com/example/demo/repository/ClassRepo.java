package com.example.demo.repository;

import com.example.demo.model.Entity_class;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClassRepo extends JpaRepository<Entity_class,Integer> {
}
