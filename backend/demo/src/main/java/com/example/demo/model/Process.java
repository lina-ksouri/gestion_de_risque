package com.example.demo.model;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Setter;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.io.File;
import java.io.Serializable;
import java.util.Set;

@Entity
@Table(name="process")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Process implements  Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int ID;

    @Column(name="name",unique = true,updatable = false)
    private String name;


    @Column(name="entity",nullable = false)
    private String Entity;

    @Enumerated(EnumType.STRING)
    @Column(name = "level")
    private LEVEL level;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="parent",referencedColumnName = "name")
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    @JsonBackReference
    private Process Parent;

    @OneToMany(fetch = FetchType.LAZY,mappedBy ="Parent")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)  //Access setting that means that the property may only be written (set) for deserialization, but will not be read (get) on serialization, that is, the value of the property is not included in serialization.
    @Setter
    private Set<Process> children;

    @ManyToOne(optional = false)
    @JoinColumn(name="owner", referencedColumnName = "name")
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    @JsonBackReference
    private User Owner;

    @Column(name="attachment")
    private File Attachment;

    @Column(name="attachment_name")
    private String name_attachment;

    public String getName_attachment() {
        return name_attachment;
    }

    public void setName_attachment(String name_attachment) {
        this.name_attachment = name_attachment;
    }

    public Process() {
        super();
    }

    public Process(int ID, String name, String entity, LEVEL level, Process parent, User owner, File attachment,String name_attachment) {
        this.ID = ID;
        this.name = name;
        Entity = entity;
        this.level = level;
        Parent = parent;
        Owner = owner;
        Attachment = attachment;
        this.name_attachment=name_attachment;
    }

    public Process(int ID, String name, String entity, LEVEL level, User owner, File attachment,String name_attachment) {
        this.ID = ID;
        this.name_attachment=name_attachment;
        this.name = name;
        Entity = entity;
        this.level = level;
        Owner = owner;
        Attachment = attachment;
    }

    public int getID() {
        return ID;
    }

    public void setID(int ID) {
        this.ID = ID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEntity() {
        return Entity;
    }

    public void setEntity(String entity) {
        Entity = entity;
    }

    public LEVEL getLevel() {
        return level;
    }

    public void setLevel(LEVEL level) {
        this.level = level;
    }

    public Process getParent() {
        return Parent;
    }

    public void setParent(Process parent) {
        Parent = parent;
    }

    @JsonIgnore
    public Set<Process> getChildren() {
        return children;
    }

    public User getOwner() {
        return Owner;
    }

    public void setOwner(User owner) {
        Owner = owner;
    }

    public File getAttachment() {
        return Attachment;
    }

    public void setAttachment(File attachment) {
        Attachment = attachment;
    }
}
