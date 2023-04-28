package com.backend.restservice.service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.restservice.entity.Juego;
import com.backend.restservice.repository.JuegoRepository;

@Service
public class JuegoService {
    @Autowired
    private JuegoRepository juegoRepository;

    public Juego create(Juego juego) {
        return juegoRepository.save(juego);
    }

    public List<Juego> getAllJuegos() {
        return juegoRepository.findAll();
    }

    public Juego getJuegoByDirectorName(String name) {
        return juegoRepository.getJuegoByDirectorName(name);
    }

    public Juego getJuegobyProtagonista(String name) {
        return juegoRepository.getJuegoByProtagonista(name);
    }

    public Juego getJuegobyProductor(String name) {
        return juegoRepository.getJuegoByProductor(name);
    }

    public Juego getJuegobyFechaLanzamiento(Date date) {
        return juegoRepository.getJuegoByFechaLanzamiento(date);
    }

    public Juego getMostRentedGame() {
        return juegoRepository.getMostRentedGame();
    }

    public void updateNameById(int id, String new_name) {
        Juego modified_Juego = juegoRepository.findById(id).orElseThrow(IllegalArgumentException::new);
        modified_Juego.setNombre(new_name);

        juegoRepository.save(modified_Juego);
    }

    public void deleteJuegoById(int id) {
        juegoRepository.deleteById(id);
    }

    public Optional<Juego> getJuegoById(int id) {
        return juegoRepository.findById(id);
    }
}
