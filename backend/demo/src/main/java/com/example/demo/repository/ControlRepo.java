package com.example.demo.repository;

import com.example.demo.model.Control;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ControlRepo extends JpaRepository<Control,Integer> {
    Control findByName(String name);

}
