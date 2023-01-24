package com.example.demo.controller;

import com.example.demo.model.Entities;
import com.example.demo.repository.EntitiesRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class EntitiesControl {
    @Autowired
    private final EntitiesRepo entitiesRepo;

    public EntitiesControl(EntitiesRepo entitiesRepo) {
        this.entitiesRepo = entitiesRepo;
    }

    @GetMapping("/allentity")
    List<Entities> getall(){
        return  this.entitiesRepo.findAll();
    }

    @GetMapping("/allentity/{name}")
    public Optional<Entities> getByName(@PathVariable(value = "name") String name){

        return entitiesRepo.findByName(name);
    }
    @PostMapping("/addentity")
    public Entities add(@RequestBody Entities newentity){
        return this.entitiesRepo.save(newentity);
    }
    @PutMapping("/editentity/{name}")
    public Entities update(@PathVariable(value = "name") String name,
                                                   @RequestBody Entities newentity){

        return entitiesRepo.findByName(name)
                .map(entity -> {
                    entity.setOwned_by(newentity.getOwned_by());
                    entity.setLocation(newentity.getLocation());
                    entity.setActive(newentity.isActive());
                    entity.setType(newentity.getType());
                    entity.setDescription(newentity.getDescription());
                    return entitiesRepo.save(entity);
                })
                .orElseGet(() -> {
                    return entitiesRepo.save(newentity);
                });
    }

}
