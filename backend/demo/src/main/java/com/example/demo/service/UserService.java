package com.example.demo.service;



import com.example.demo.model.User;

import java.util.List;

public interface UserService {
    User saveUser(User user);

    User findByUsername(String username);

    List<User>  findByBlock(boolean block);

    List<User> findAllUsers();

    User updateUser(User user);

    void DeleteUser(int id);
}
