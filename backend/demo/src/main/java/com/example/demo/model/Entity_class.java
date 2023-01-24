package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.io.File;
import java.io.Serializable;
import java.util.Base64;

import static org.hibernate.annotations.CascadeType.SAVE_UPDATE;

@Entity
@Table(name="entity_class")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Entity_class implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int ID;

    @Column(name="name",length = 50,unique = true)
    private String Name;

    @ManyToOne(optional = false)
    @Cascade(value = SAVE_UPDATE)
    @JoinColumn(name="tier", referencedColumnName = "tier_level")
    @JsonIgnore
    @JsonBackReference
    private Entity_tiers Tier;

    @Column(name="Attachment")
    private File Attachment;

    @Column(name="attachment_name")
    private String name_attachment;

    public String getName_attachment() {
        return name_attachment;
    }

    public void setName_attachment(String name_attachment) {
        this.name_attachment = name_attachment;
    }

    public Entity_class() {
        super();
    }

    public Entity_class(int ID, String name, Entity_tiers tier, File attachment,String name_attachment) {
        this.ID = ID;
        Name = name;
        Tier = tier;
        Attachment = attachment;
        this.name_attachment=name_attachment;
    }

    public int getID() {
        return ID;
    }

    public void setID(int ID) {
        this.ID = ID;
    }

    public Entity_tiers getTier() {
        return Tier;
    }

    public void setTier(Entity_tiers tiers) {
        Tier = tiers;
    }

    public File getAttachment() {
        return Attachment;
    }

    public void setAttachment(File attachment) {
        Attachment = attachment;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }


}