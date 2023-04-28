package com.backend.restservice.service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.restservice.entity.Alquiler;
import com.backend.restservice.repository.AlquilerRepository;

@Service
public class AlquilerService {

    @Autowired
    private AlquilerRepository alquilerRepository;

    public Alquiler create(Alquiler alquiler) {
        return alquilerRepository.save(alquiler);
    }

    public List<Alquiler> getAllAlquileres() {
        return alquilerRepository.findAll();
    }

    public void updateFechaAlquilerById(int id, Date new_fecha) {
        Alquiler modified_alquiler = alquilerRepository.findById(id).orElseThrow(IllegalArgumentException::new);
        modified_alquiler.setFecha_alquiler(new_fecha);

        alquilerRepository.save(modified_alquiler);
    }

    public Optional<Alquiler> getAlquilerById(int id) {
        return alquilerRepository.findById(id);
    }

    public void deleteById(int id) {
        alquilerRepository.deleteById(id);
    }
}
