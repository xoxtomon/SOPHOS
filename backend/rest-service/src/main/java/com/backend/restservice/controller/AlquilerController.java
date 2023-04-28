package com.backend.restservice.controller;

import java.net.URI;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
    private ResponseEntity<List<Alquiler>> getAllalquileres() {
        return ResponseEntity.ok(alquilerService.getAllAlquileres());
    }

    @GetMapping(value = "/{id}")
    private ResponseEntity<Optional<Alquiler>> getAlquilerById(@PathVariable("id") int id) {
        return ResponseEntity.ok(alquilerService.getAlquilerById(id));
    }

    @DeleteMapping(value = "/delete/{id}")
    private ResponseEntity<HttpStatus> deleteAlquilerById(@PathVariable("id") int id) {
        alquilerService.deleteById(id);
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @PutMapping(value = "/{id}/{new_fecha}")
    private HttpStatus updateNameById(@PathVariable("id") int id, @PathVariable("new_fecha") String new_fecha) {
        try {
            /*
             * Date new_date = new
             * SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS").parse(new_fecha);
             * System.out.println(new_date);
             * alquilerService.updateNameById(id, new_date);
             */
            // @RequestBody Request myRequest
            // Date new_date = myRequest.getNew_fecha_alquiler();
            // int id = myRequest.getId();

            Date new_date = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS").parse(new_fecha);

            alquilerService.updateFechaAlquilerById(id, new_date);
            return HttpStatus.OK;
        } catch (Exception e) {
            return HttpStatus.BAD_REQUEST;
        }
    }
}
