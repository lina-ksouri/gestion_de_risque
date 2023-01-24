package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name="riskanalyse")
@Data
@NoArgsConstructor
public class riskAnalyse {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int ID;

    @Column(name = "name")
    private String name;

    @Column(name="risk_brut")
    private int risk_brut;

    @Column(name="last_update")
    private LocalDate Last_update;


}
