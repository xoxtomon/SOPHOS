package com.backend.restservice.service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

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

    public void updatePriceById(int id, int new_price) {
        Precio modified_price = precioRepository.findById(id).orElseThrow(IllegalArgumentException::new);
        modified_price.setPrecio(new_price);

        precioRepository.save(modified_price);
    }

    public Optional<Precio> getPriceById(int id) {
        return precioRepository.findById(id);
    }

    public void deleteById(int id) {
        precioRepository.deleteById(id);
    }
}
