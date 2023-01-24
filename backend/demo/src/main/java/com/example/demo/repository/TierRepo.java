package com.example.demo.repository;

import com.example.demo.model.Entity_tiers;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TierRepo extends JpaRepository<Entity_tiers,Integer> {
}
