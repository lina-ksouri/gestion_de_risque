package com.example.demo.repository;

import com.example.demo.model.riskAnalyse;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AnalyseRepo extends JpaRepository<riskAnalyse,Integer> {

   List<riskAnalyse> findByName(String name);
}
