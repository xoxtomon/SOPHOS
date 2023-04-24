package com.backend.restservice.entity;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name = "juego")
public class Juego {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "director")
    private String director;

    @Column(name = "protagonista")
    private String protagonista;

    @Column(name = "productor")
    private String productor;

    @Column(name = "plataforma")
    private String plataforma;

    @Column(name = "fecha_lanzamiento")
    @Temporal(TemporalType.DATE)
    private Date fecha_lanzamiento;

    public Juego() {
    }

    public Juego(String nombre, String director, String protagonista, String productor,
            String plataforma, Date fecha_lanzamiento) {
        this.nombre = nombre;
        this.director = director;
        this.protagonista = protagonista;
        this.productor = productor;
        this.plataforma = plataforma;
        this.fecha_lanzamiento = fecha_lanzamiento;
    }

    public Integer getId() {
        return id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDirector() {
        return director;
    }

    public void setDirector(String director) {
        this.director = director;
    }

    public String getProtagonista() {
        return protagonista;
    }

    public void setProtagonista(String protagonista) {
        this.protagonista = protagonista;
    }

    public String getProductor() {
        return productor;
    }

    public void setProductor(String productor) {
        this.productor = productor;
    }

    public String getPlataforma() {
        return plataforma;
    }

    public void setPlataforma(String plataforma) {
        this.plataforma = plataforma;
    }

    public Date getFecha_lanzamiento() {
        return fecha_lanzamiento;
    }

    public void setFecha_lanzamiento(Date fecha_lanzamiento) {
        this.fecha_lanzamiento = fecha_lanzamiento;
    }

}
