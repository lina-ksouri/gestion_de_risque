package com.example.demo.controller;

import com.example.demo.model.Entity_tiers;

import com.example.demo.repository.TierRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
public class TiersControl {
    @Autowired
    private final TierRepo tiersRepo;



    public TiersControl(TierRepo tiersRepo) {
        this.tiersRepo = tiersRepo;
    }
    @GetMapping("/tiers")
    public ResponseEntity<List<Entity_tiers>> getall() {

        List<Entity_tiers> tiers = tiersRepo.findAll();
        return new ResponseEntity<>(tiers, HttpStatus.OK);
    }

    @PostMapping("/addtiers")
    Entity_tiers newTiers(@RequestBody Entity_tiers newtiers) throws IOException {
        if(newtiers.getAttachment() != null){
            String filename = newtiers.getAttachment().getPath().replace("C:\\fakepath\\","");
            newtiers.setName_attachment(filename); ;
            return tiersRepo.save(newtiers);
        }
        else {
            return tiersRepo.save(newtiers);
        }
    }

}
