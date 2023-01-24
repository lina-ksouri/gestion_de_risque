package com.example.demo.controller;


import com.example.demo.model.Entity_type;
import com.example.demo.repository.TypeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TypeControl {

    @Autowired
    private final TypeRepo typeRepo;


    public TypeControl(TypeRepo typeRepo) {
        this.typeRepo = typeRepo;
    }

    @GetMapping("/types")
    public List<Entity_type> getall() {
        return this.typeRepo.findAll();
    }
    @GetMapping("/types/{name}")
    public Entity_type getByName(@PathVariable("name") String name) {
        return typeRepo.findByName(name);
    }
    @PostMapping("/addtype")
    public Entity_type add(@RequestBody Entity_type newtype) {
        return this.typeRepo.save(newtype);
    }
}
