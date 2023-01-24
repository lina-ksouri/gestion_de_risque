package com.example.demo.controller;



import com.example.demo.model.LEVEL;
import com.example.demo.model.Process;
import com.example.demo.repository.ProcessRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class ProcessControl {

    @Autowired
    private final ProcessRepo processRepo;

    public ProcessControl(ProcessRepo processRepo) {
        this.processRepo = processRepo;
    }


    @GetMapping("/allprocess")
    List<Process> getall(){

        return  this.processRepo.findAll();
    }

    @GetMapping("/process/{name}")
    public Optional<Process> getByName(@PathVariable(value = "name") String name){

        return processRepo.findByName(name);
    }

    @GetMapping("/getprocess/{level}")
    public List<Process> getByLevel(@PathVariable(value = "level") LEVEL level){
        if(level == LEVEL.Procedure)
        {
                     return processRepo.getByLevel(LEVEL.Process);
        }
        else if (level == LEVEL.Operation){
            return processRepo.getByLevel(LEVEL.Procedure);}

        return null;
    }
    @PostMapping("/addprocess")
    public Process add(@RequestBody Process newprocess){
        if(newprocess.getAttachment()!= null) {
            String filename = newprocess.getAttachment().getPath().replace("C:\\fakepath\\", "");
            newprocess.setName_attachment(filename);
            return this.processRepo.save(newprocess);
        }
        else{
            return this.processRepo.save(newprocess);
        }
    }
    @PutMapping("/editprocess/{name}")
    public Process update(@PathVariable(value = "name") String name,
                           @RequestBody Process newprocess){

        return processRepo.findByName(name)
                .map(process -> {
                    process.setOwner(newprocess.getOwner());
                    process.setEntity(newprocess.getEntity());
                    process.setLevel(newprocess.getLevel());
                    process.setParent(newprocess.getParent());
                    process.setAttachment(newprocess.getAttachment());
                    process.setName_attachment((newprocess.getName_attachment()));
                    return processRepo.save(process);
                })
                .orElseGet(() -> {
                    return processRepo.save(newprocess);
                });
    }

}
