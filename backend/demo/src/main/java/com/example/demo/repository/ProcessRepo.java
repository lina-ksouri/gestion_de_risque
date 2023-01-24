package com.example.demo.repository;


import com.example.demo.model.LEVEL;
import com.example.demo.model.Process;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ProcessRepo extends JpaRepository<Process,Integer> {
    Optional<Process> findByName(String name);
    List<Process> getByLevel(LEVEL level);
}
