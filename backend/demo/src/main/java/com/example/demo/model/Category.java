package com.example.demo.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.io.Serializable;

@Entity(name="category")
@Data
@NoArgsConstructor
@AllArgsConstructor
@DynamicInsert
@DynamicUpdate
public class Category implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_cat;

    @Column(name="name",unique = true,nullable = false,updatable = false)
    private String name;

    @Column(name="description",nullable = true,length = 500)
    private String Description;

    public Category(String name,String description) {

        this.name = name;
        this.Description= description;
    }
}
