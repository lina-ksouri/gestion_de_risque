package com.example.demo.controller;


import com.example.demo.jwt.JwtTokenProvider;
import com.example.demo.model.User;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.security.Principal;
import java.util.List;

@RestController
public class UserController {

    @Autowired
    private JwtTokenProvider tokenProvider;

    @Autowired
    private UserService userService;

    @GetMapping("/api/user/all/{block}")
    public List<User> getAllUsers(@PathVariable(value = "block") boolean block) {

        List<User> users= userService.findByBlock(block);
        return users;
    }

    @GetMapping("/api/user/currentuser/{name}")
    public User getByName(@PathVariable(value = "name") String name){
           return userService.findByUsername(name);

    }

    @PostMapping("/api/user/registration")
    public ResponseEntity<?> register(@RequestBody User user){
        if(userService.findByUsername(user.getUsername()) != null){
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
        //user.setRole(Role.EMPLOYEE);
        user.setBlock(false);
        return new ResponseEntity<>(userService.saveUser(user), HttpStatus.CREATED);
    }

    @PutMapping("api/user/update/{name}")
    public ResponseEntity<?> update(@PathVariable(value = "name") String name,
                                    @RequestBody User newuser){

        User user= userService.findByUsername(name);
        user.setName(newuser.getName());
        user.setEmail(newuser.getEmail());
        user.setPhone(newuser.getPhone());
        user.setPassword(newuser.getPassword());
        user.setRole(newuser.getRole());
        user.setBlock(false);
        return new ResponseEntity<>(userService.saveUser(user), HttpStatus.OK);
    }
    
    @GetMapping("/api/user/login")
    public ResponseEntity<?> getUser(Principal principal){
        if(principal == null){
            //This should be ok http status because here will be logout path.
            return ResponseEntity.ok(principal);
        }
        UsernamePasswordAuthenticationToken authenticationToken = (UsernamePasswordAuthenticationToken) principal;
        User user = userService.findByUsername(authenticationToken.getName());
        if(user.isBlock()==false) {
            user.setToken(tokenProvider.generateToken(authenticationToken));
            return new ResponseEntity<>(user, HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
    @GetMapping("/api/user/logout")
    public String logoutPage(HttpServletRequest request, HttpServletResponse response) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth != null) {
               new SecurityContextLogoutHandler().logout(request,response,auth);
        }
        return "logout sucess";
    }
    @PatchMapping("/api/user/delete/{username}/{block}")
    public ResponseEntity<User> delete(@PathVariable("username") String username, @PathVariable("block") boolean block) {
        User user = userService.findByUsername(username);
        user.setBlock(block);
        return new ResponseEntity<>(userService.saveUser(user),HttpStatus.OK);
    }
}


