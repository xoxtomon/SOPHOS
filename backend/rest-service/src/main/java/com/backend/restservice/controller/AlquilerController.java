package com.backend.restservice.controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.restservice.entity.Alquiler;
import com.backend.restservice.service.AlquilerService;

@RestController
@RequestMapping("/api/v1/alquiler")
public class AlquilerController {
    @Autowired
    private AlquilerService alquilerService;

    @PostMapping("/add")
    private ResponseEntity<Alquiler> postUser(@RequestBody Alquiler alquiler) {
        Alquiler temporal = alquilerService.create(alquiler);

        try {
            return ResponseEntity.created(new URI("/api/v1/alquiler" + temporal.getId())).body(temporal);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @GetMapping
    private ResponseEntity<List<Alquiler>> getAllJuego() {
        return ResponseEntity.ok(alquilerService.getAllAlquileres());
    }

}
