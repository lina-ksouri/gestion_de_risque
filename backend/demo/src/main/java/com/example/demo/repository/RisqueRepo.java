package com.example.demo.repository;


import com.example.demo.model.Risque;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RisqueRepo extends JpaRepository<Risque,Integer> {
    Optional<Risque> findByName(String name);
    Risque findByCause(String name);
}
