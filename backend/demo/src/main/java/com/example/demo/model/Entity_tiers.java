package com.example.demo.model;

import javax.persistence.*;
import java.io.File;
import java.io.Serializable;


@Entity
@Table(name="entity_tiers")
public class Entity_tiers implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int ID;


    @Column(name="tier_level",unique = true)
    private int tier_level;

    @Column(name="label",nullable = false,length = 50, unique = true)
    private String Label;
    @Column(name="name",nullable = false, length = 50 ,unique = true)
    private String Name;

   @Column(name="attachment")
    private File Attachment;

    public String getName_attachment() {
        return name_attachment;
    }

    public void setName_attachment(String name_attachment) {
        this.name_attachment = name_attachment;
    }

    @Column(name="attachment_name")
   private String name_attachment;

    public int getID() {
        return ID;
    }

    public void setID(int ID) {
        this.ID = ID;
    }


    public Entity_tiers() {
        super();
    }

    public File getAttachment() {
        return Attachment;
    }

    public void setAttachment(File attachment) {
        Attachment = attachment;
    }

    public int getTier_level() {
        return tier_level;
    }

    public void setTier_level(int tier_level) {
        this.tier_level = tier_level;
    }

    public String getLabel() {
        return Label;
    }

    public void setLabel(String label) {
        Label = label;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }
}

