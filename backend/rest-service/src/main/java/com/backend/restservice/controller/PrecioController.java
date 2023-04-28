package com.backend.restservice.controller;

import java.net.URI;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
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

import com.backend.restservice.entity.Precio;
import com.backend.restservice.service.PrecioService;

@RestController
@RequestMapping("/api/v1/precio")
public class PrecioController {

    @Autowired
    private PrecioService precioService;

    @PostMapping("/add")
    private ResponseEntity<Precio> postUser(@RequestBody Precio precio) {
        Precio temporal = precioService.create(precio);

        try {
            return ResponseEntity.created(new URI("/api/v1/precio" + temporal.getId())).body(temporal);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @GetMapping
    private ResponseEntity<List<Precio>> getAllPrecios() {
        return ResponseEntity.ok(precioService.getAllPrecios());
    }

    @GetMapping("/sales/{date}")
    private ResponseEntity<Integer> getSalesByDate(
            @PathVariable("date") @DateTimeFormat(pattern = "yyyy-MM-dd") Date date) {
        return ResponseEntity.ok(precioService.getSalesByDate(date));
    }

    @GetMapping("/{id}")
    private ResponseEntity<Optional<Precio>> getPriceById(@PathVariable("id") int id) {
        return ResponseEntity.ok(precioService.getPriceById(id));
    }

    @PutMapping(value = "/{id}/{new_precio}")
    private HttpStatus updateNameById(@PathVariable("id") int id, @PathVariable("new_precio") int new_precio) {
        try {
            precioService.updatePriceById(id, new_precio);
            return HttpStatus.OK;
        } catch (Exception e) {
            return HttpStatus.BAD_REQUEST;
        }
    }

    @DeleteMapping(value = "/delete/{id}")
    private ResponseEntity<HttpStatus> deleteById(@PathVariable("id") int id) {
        precioService.deleteById(id);
        return ResponseEntity.status(HttpStatus.OK).build();
    }
}
