package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="entity_type")
public class Entity_type implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int ID;

    @Column(unique = true)
    private String name;


    @Column(name="active")
    private boolean Active;

    @Column(name="description",length = 4000)
    private String Description;

    @ManyToMany
    @JoinTable(name = "type_class",
            joinColumns = @JoinColumn(name = "name", referencedColumnName = "name"),
            inverseJoinColumns = @JoinColumn(name = "class", referencedColumnName = "name"))
    @JsonIgnore
    @JsonBackReference
    private List<Entity_class> Classe;


    public Entity_type() {
        super();
    }

    public Entity_type(int ID, String name, boolean active, String description, List<Entity_class> classe) {
        this.ID = ID;
        this.name = name;
        Active = active;
        Description = description;
        Classe = classe;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


    public boolean isActive() {
        return Active;
    }

    public void setActive(boolean active) {
        Active = active;
    }

    public String getDescription() {
        return Description;
    }

    public void setDescription(String description) {
        Description = description;
    }

    public int getID() {
        return ID;
    }

    public void setID(int ID) {
        this.ID = ID;
    }

    public List<Entity_class> getClasse() {
        return Classe;
    }

    public void setClasse(List<Entity_class> classe) {
        Classe = classe;
    }
}
