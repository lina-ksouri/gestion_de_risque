package com.example.demo.controller;

import com.example.demo.model.Risque;
import com.example.demo.model.riskAnalyse;
import com.example.demo.repository.AnalyseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
public class AnalyseControl {
    @Autowired
    private AnalyseRepo analyseRepo;

    @GetMapping("/analyse")
    List<riskAnalyse> getall(){

        return analyseRepo.findAll();
    }


    @GetMapping("/analyse/{name}")
    public List<riskAnalyse> getByName(@PathVariable(value = "name") String name){
          return analyseRepo.findByName(name);
    }

}
