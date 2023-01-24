package com.example.demo.controller;



import com.example.demo.model.Risque;
import com.example.demo.model.riskAnalyse;
import com.example.demo.repository.AnalyseRepo;
import com.example.demo.repository.RisqueRepo;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@AllArgsConstructor
public class RisqueControl {

    @Autowired
    private final RisqueRepo risqueRepo;

    @Autowired
    private AnalyseRepo analyseRepo;

    @GetMapping("/allrisk")
    List<Risque> getall(){

        return  this.risqueRepo.findAll();
    }

    @GetMapping("/risk/{name}")
    public Optional<Risque> getByName(@PathVariable(value = "name") String name){

        return risqueRepo.findByName(name);
    }
    @PostMapping("/addrisk")
    public Risque add(@RequestBody Risque newrisk){
        riskAnalyse risk =new riskAnalyse();
        risk.setName(newrisk.getName());
        risk.setRisk_brut(newrisk.getRisk_brut());
        risk.setLast_update(newrisk.getLast_update());
        analyseRepo.save(risk);
        return this.risqueRepo.save(newrisk);

    }
    @PutMapping("/editrisk/{name}")
    public Risque update(@PathVariable(value = "name") String name,
                           @RequestBody Risque newrisk){
        riskAnalyse risk =new riskAnalyse();
        risk.setName(newrisk.getName());
        risk.setRisk_brut(newrisk.getRisk_brut());
        risk.setLast_update(newrisk.getLast_update());
        analyseRepo.save(risk);
        return risqueRepo.findByName(name)
                .map(entity -> {
                    entity.setCause(newrisk.getCause());
                    entity.setCategory(newrisk.getCategory());
                    entity.setImpact(newrisk.getImpact());
                    entity.setLast_update(newrisk.getLast_update());
                    entity.setProbability(newrisk.getProbability());
                    entity.setProcess(newrisk.getProcess());
                    entity.setNiv_maitrise(newrisk.getNiv_maitrise());
                    entity.setRisk_brut(newrisk.getRisk_brut());
                    entity.setRisk_net(newrisk.getRisk_net());
                    return risqueRepo.save(entity);
                })
                .orElseGet(() -> {
                    return risqueRepo.save(newrisk);
                });
    }

    @PostMapping("/editrisk/{name}")
    public Risque Save(@PathVariable(value = "name") String name,@RequestBody Risque newrisk){
        riskAnalyse risk =new riskAnalyse();
        risk.setName(newrisk.getName());
        risk.setRisk_brut(newrisk.getRisk_brut());
        risk.setLast_update(newrisk.getLast_update());
        analyseRepo.save(risk);
        return risqueRepo.findByName(name)
                .map(entity -> {
                    entity.setImpact(newrisk.getImpact());
                    entity.setLast_update(newrisk.getLast_update());
                    entity.setProbability(newrisk.getProbability());
                    entity.setNiv_maitrise(newrisk.getNiv_maitrise());
                    entity.setRisk_brut(newrisk.getRisk_brut());
                    entity.setRisk_net(newrisk.getRisk_net());
                    return risqueRepo.save(entity);
                })
                .orElseGet(() -> {
                    return risqueRepo.save(newrisk);
                });
    }

}
