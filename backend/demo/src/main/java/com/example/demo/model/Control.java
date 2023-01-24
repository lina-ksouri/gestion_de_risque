package com.example.demo.model;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

import static org.hibernate.annotations.CascadeType.SAVE_UPDATE;

enum frequency{
    Event_Driven_Daily,
    Weekly,
    Monthly,
    Quarterly,
    Semi_Annually,
    Annually
}

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity(name="control")
public class Control implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_control;

    @Column(name = "name",updatable = false)
    private String name;

    @Column(name="description",length = 3000)
    private String description;

    @Enumerated(EnumType.STRING)
    @Column(name="Attestation_frequency")
    private frequency attestation;

    @ManyToMany
    @JoinTable(name = "risk_contol",
            joinColumns = @JoinColumn(name = "contol", referencedColumnName = "name"),
            inverseJoinColumns = @JoinColumn(name = "risk", referencedColumnName = "name"))
    @JsonIgnore
    @JsonBackReference
    private List<Risque> risk;

    @Column(name="user_name")
    private String user_name;


    public Control(String name, String description) {
        this.name = name;
        this.description=description;
    }
}
