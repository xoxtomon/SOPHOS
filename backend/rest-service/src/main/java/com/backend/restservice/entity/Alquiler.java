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
@Table(name = "alquiler")
public class Alquiler {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(name = "cliente_id")
    private int cliente_id;

    @Column(name = "juego_id")
    private int juego_id;

    @Column(name = "fecha_alquiler")
    @Temporal(TemporalType.DATE)
    private Date fecha_alquiler;

    @Column(name = "fecha_devolucion", nullable = true)
    @Temporal(TemporalType.DATE)
    private Date fecha_devolucion;

    public Alquiler() {
    }

    public Alquiler(int cliente_id, int juego_id, Date fecha_alquiler, Date fecha_devolucion) {
        this.cliente_id = cliente_id;
        this.juego_id = juego_id;
        this.fecha_alquiler = fecha_alquiler;
        this.fecha_devolucion = fecha_devolucion;
    }

    public Integer getId() {
        return id;
    }

    public int getCliente_id() {
        return cliente_id;
    }

    public void setCliente_id(int cliente_id) {
        this.cliente_id = cliente_id;
    }

    public int getJuego_id() {
        return juego_id;
    }

    public void setJuego_id(int juego_id) {
        this.juego_id = juego_id;
    }

    public Date getFecha_alquiler() {
        return fecha_alquiler;
    }

    public void setFecha_alquiler(Date fecha_alquiler) {
        this.fecha_alquiler = fecha_alquiler;
    }

    public Date getFecha_devolucion() {
        return fecha_devolucion;
    }

    public void setFecha_devolucion(Date fecha_devolucion) {
        this.fecha_devolucion = fecha_devolucion;
    }

}
