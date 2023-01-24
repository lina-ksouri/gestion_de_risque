package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Entity
@Table(name="risk")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Data
@NoArgsConstructor
public class Risque implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_risk;

    @Column(name = "name",updatable = false,unique = true)
    private String name;

    @Column(name="cause",length = 1000)
    private String cause;

    @Column(name="impact")
    private int impact;

    @Column(name="prob")
    private int probability;

    @Column(name="niv_maitrise")
    private int niv_maitrise;

    @Column(name="risk_net")
    private int risk_net;

    @Column(name="risk_brut")
    private int risk_brut;

    @Column(name="last_update")
    @JsonFormat(pattern="yyyy-MM-dd")
    private LocalDate Last_update ;



    @Column(name="process")
    private String[] process;


    @Column(name="category")
    private String category;

    public Risque(int id_risk, String name, String cause, int impact, int probability, int niv_maitrise, String[] process,  String category) {
        this.id_risk = id_risk;
        this.name = name;
        this.cause = cause;
        this.impact = impact;
        this.probability = probability;
        this.niv_maitrise = niv_maitrise;
        this.process = process;
        this.category = category;
    }
}
