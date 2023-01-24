package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import javax.xml.stream.Location;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.List;

@Entity
@Table(name="entities")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Entities implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int ID;

    @Column(name="name",unique = true,updatable = false)
    private String name;

    @ManyToMany
    @JoinColumn(name="Owned_by", referencedColumnName = "name")
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    @JsonBackReference
    private List<User> Owned_by;


    @Column(name="active")
    private boolean Active;

    @Column(name="description",length = 4000)
    private String Description;

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    @Column(name="location")
    private String location;

    @ManyToOne(optional = false)
    @JoinColumn(name="type", referencedColumnName = "name")
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    @JsonBackReference
    private Entity_type type;

    @ManyToOne(optional = false)
    @JoinColumn(name="classe", referencedColumnName = "name")
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    @JsonBackReference
    private Entity_class Classe;




    public Entities() {
        super();
    }

    public Entities(String name, List<User> owned_by, boolean active, String description, Entity_type type,Entity_class classe) {
        this.name = name;
        Owned_by = owned_by;
        Active = active;
        Description = description;
        this.type = type;
        Classe = classe;
    }

    public int getID() {
        return ID;
    }

    public void setID(int ID) {
        this.ID = ID;
    }

    public Entity_class getClasse() {
        return Classe;
    }

    public void setClasse(Entity_class classe) {
        Classe = classe;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {this.name = name;
    }

    public List<User> getOwned_by() {
        return Owned_by;
    }

    public void setOwned_by(List<User> owned_by) {
        Owned_by = owned_by;
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

    public Entity_type getType() {
        return type;
    }

    public void setType(Entity_type type) {
        this.type = type;
    }

}
