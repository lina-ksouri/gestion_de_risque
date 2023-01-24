package com.example.demo.controller;

import com.example.demo.model.Category;
import com.example.demo.repository.CategoryRepoo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CategoryControl {
    @Autowired
    private final CategoryRepoo categoryRepo;

    public CategoryControl(CategoryRepoo categoryRepo) {
        this.categoryRepo = categoryRepo;
    }

    @GetMapping("/category")
    public ResponseEntity<List<Category>> getall() {

        List<Category> categorie = categoryRepo.findAll();
        return new ResponseEntity<>(categorie, HttpStatus.OK);
    }

    @PostMapping("/addCategory")
    Category newCategory(@RequestBody Category newcat) {
        return categoryRepo.save(newcat);
    }


}
