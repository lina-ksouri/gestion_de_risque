package com.example.demo.controller;


import com.example.demo.model.Control;
import com.example.demo.model.Risque;
import com.example.demo.repository.ControlRepo;
import com.example.demo.repository.RisqueRepo;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Array;
import java.util.ArrayList;
import java.util.List;

@RestController
@AllArgsConstructor
public class ControlController {
    @Autowired
    private final ControlRepo controlRepo;

    @Autowired
    private RisqueRepo risqueRepo;


    @GetMapping("/allcontrol")
    List<Control> getall(){

        return controlRepo.findAll();
    }

    @GetMapping("/control/{name}")
    public Control getByName(@PathVariable(value = "name") String name){

        return controlRepo.findByName(name);
    }

    @PostMapping("/editcontrol")
    public Control Save(@RequestBody Control newcontrol){
        Control control =  controlRepo.findByName(newcontrol.getName());

        if(control != null) {
            control.setAttestation(newcontrol.getAttestation());
            control.setUser_name(newcontrol.getUser_name());
            control.setRisk(newcontrol.getRisk());


        } else {
            control = new Control();
            control.setName(control.getName());
            control.setDescription(newcontrol.getDescription());
            control.setAttestation(newcontrol.getAttestation());
            control.setUser_name(newcontrol.getUser_name());
            control.setRisk(control.getRisk());
        }
        return controlRepo.save(control);
    }
    @PutMapping("/editcontrol/{name}")
    public Control update(@PathVariable(value = "name") String name,
                          @RequestBody Control newcontrol){

        Control control = controlRepo.findByName(name);
        control.setAttestation(newcontrol.getAttestation());
        control.setUser_name(newcontrol.getUser_name());
        ArrayList listOfRisque = new ArrayList();
        listOfRisque.add(newcontrol.getRisk());
        control.setRisk(listOfRisque);

        return controlRepo.save(control);
    }

}
