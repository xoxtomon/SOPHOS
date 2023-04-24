package com.backend.restservice.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.restservice.entity.Precio;
import com.backend.restservice.repository.PrecioRepository;

@Service
public class PrecioService {

    @Autowired
    private PrecioRepository precioRepository;

    public Precio create(Precio precio) {
        return precioRepository.save(precio);
    }

    public List<Precio> getAllPrecios() {
        return precioRepository.findAll();
    }

    public Integer getSalesByDate(Date date) {
        return precioRepository.getSalesByDate(date);
    }
}
