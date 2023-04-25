package com.backend.restservice.repository;

import java.util.Date;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.backend.restservice.entity.Precio;

@Repository
public interface PrecioRepository extends JpaRepository<Precio, Integer> {

    @Query("SELECT SUM(p.precio) FROM Precio p INNER JOIN Alquiler a ON p.juego_id = a.juego_id WHERE a.fecha_alquiler = ?1")
    Integer getSalesByDate(Date date);

}
