package com.backend.restservice.service;

import java.util.List;

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
}
