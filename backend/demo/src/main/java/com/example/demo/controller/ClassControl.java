package com.example.demo.controller;


import com.example.demo.model.Entity_class;
import com.example.demo.repository.ClassRepo;
import com.example.demo.repository.TierRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ClassControl {
    @Autowired
    private final ClassRepo classRepo;

    public ClassControl(ClassRepo classRepo, TierRepo tierRepo) {
        this.classRepo = classRepo;

    }

    @GetMapping("/class")
    public ResponseEntity<List<Entity_class>> all() {
        List<Entity_class> classes =  classRepo.findAll();
        return new ResponseEntity<>(classes, HttpStatus.OK);
    }
    @PostMapping("/addclass")
    Entity_class newClass(@RequestBody Entity_class newclass) {
        if(newclass.getAttachment()!= null){
            String filename = newclass.getAttachment().getPath().replace("C:\\fakepath\\","");
            newclass.setName_attachment(filename);
            return classRepo.save(newclass);
        }
        else{
            return classRepo.save(newclass);
        }

    }

}

