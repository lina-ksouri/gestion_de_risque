package com.example.demo.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Data
@Entity
@Table(name="user_tab")
public class User implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="name")
    private String name;

    @Column(name="email")
    private String email;

    @Column(name="username")
    private String username;

    @Column(name="password")
    private String password;

    @Column(name="phone",length = 8)
    private String phone;

    @Enumerated(EnumType.STRING)
    @Column(name="role")
    private Role role;

    @Column(name="blocked")
    private boolean block;


    @Transient
    private String token;
}
