package com.backend.restservice.repository;

import java.util.Date;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.backend.restservice.entity.Juego;

@Repository
public interface JuegoRepository extends JpaRepository<Juego, Integer> {
    @Query("SELECT j FROM Juego j WHERE j.director = ?1")
    Juego getJuegoByDirectorName(String name);

    @Query("SELECT j FROM Juego j WHERE j.protagonista = ?1")
    Juego getJuegoByProtagonista(String name);

    @Query("SELECT j FROM Juego j WHERE j.productor = ?1")
    Juego getJuegoByProductor(String name);

    @Query("SELECT j FROM Juego j WHERE j.fecha_lanzamiento = ?1")
    Juego getJuegoByFechaLanzamiento(Date date);

    @Query("SELECT j FROM Juego j JOIN Alquiler a ON j.id = a.juego_id GROUP BY j.id ORDER BY COUNT(*) DESC LIMIT 1")
    Juego getMostRentedGame();

}
