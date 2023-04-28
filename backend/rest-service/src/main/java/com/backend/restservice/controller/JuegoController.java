package com.backend.restservice.controller;

import java.net.URI;
import java.sql.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.restservice.entity.Juego;
import com.backend.restservice.service.JuegoService;

@RestController
@RequestMapping("/api/v1/juego")
public class JuegoController {
    @Autowired
    private JuegoService juegoService;

    @PostMapping("/add")
    private ResponseEntity<Juego> postUser(@RequestBody Juego juego) {
        Juego temporal = juegoService.create(juego);

        try {
            return ResponseEntity.created(new URI("/api/v1/juego" + temporal.getId())).body(temporal);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @GetMapping
    private ResponseEntity<List<Juego>> getAllJuego() {
        return ResponseEntity.ok(juegoService.getAllJuegos());
    }

    @GetMapping(value = "/{id}")
    private ResponseEntity<Optional<Juego>> getJuegoById(@PathVariable("id") int id) {
        return ResponseEntity.ok(juegoService.getJuegoById(id));
    }

    @GetMapping("/director/{name}")
    private ResponseEntity<Juego> getJuegoByDirector(@PathVariable("name") String name) {
        return ResponseEntity.ok(juegoService.getJuegoByDirectorName(name));
    }

    @GetMapping("/protagonista/{name}")
    private ResponseEntity<Juego> getJuegoByProtagonista(@PathVariable("name") String name) {
        return ResponseEntity.ok(juegoService.getJuegobyProtagonista(name));
    }

    @GetMapping("/productor/{name}")
    private ResponseEntity<Juego> getJuegoByProductor(@PathVariable("name") String name) {
        return ResponseEntity.ok(juegoService.getJuegobyProductor(name));
    }

    @GetMapping("/lanzamiento/{date}")
    private ResponseEntity<Juego> getJuegoByFechaLanzamiento(@PathVariable("date") Date date) {
        return ResponseEntity.ok(juegoService.getJuegobyFechaLanzamiento(date));
    }

    @GetMapping(value = "/mostRentedGame")
    private ResponseEntity<Juego> getMostRentedGame() {
        return ResponseEntity.ok(juegoService.getMostRentedGame());
    }

    @PutMapping(value = "/{id}/{new_name}")
    private HttpStatus updateNameById(@PathVariable("id") int id, @PathVariable("new_name") String new_name) {
        try {
            juegoService.updateNameById(id, new_name);
            return HttpStatus.OK;
        } catch (Exception e) {
            return HttpStatus.BAD_REQUEST;
        }
    }

    /*
     * @DeleteMapping("/delete/{id}")
     * private ResponseEntity<HttpStatus> deleteJuegoById(@PathVariable("id") int
     * id) {
     * juegoService.deleteJuegoById(id);
     * return ResponseEntity.status(HttpStatus.OK).build();
     * }
     */

}
