package com.example.demo.model;

import javax.persistence.*;

@Entity
@Table(name="control_desc")
public class control_descriptin {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "name",updatable = false,unique = true)
    private String name;

    @Column(name="description",length = 3000)
    private String description;
}
