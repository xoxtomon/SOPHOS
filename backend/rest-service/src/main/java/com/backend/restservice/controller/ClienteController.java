package com.backend.restservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.backend.restservice.entity.Cliente;
import com.backend.restservice.service.ClienteService;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/cliente")
public class ClienteController {

    @Autowired
    private ClienteService clienteService;

    @PostMapping("/add")
    private ResponseEntity<Cliente> postUser(@RequestBody Cliente cliente) {
        Cliente temporal = clienteService.create(cliente);

        try {
            return ResponseEntity.created(new URI("/api/v1/cliente" + temporal.getId())).body(temporal);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @GetMapping
    private ResponseEntity<List<Cliente>> getAllUsers() {
        return ResponseEntity.ok(clienteService.getAllClientes());
    }

    @GetMapping(value = "/{id}")
    private ResponseEntity<Optional<Cliente>> listUsersByID(@PathVariable("id") int id) {
        return ResponseEntity.ok(clienteService.findById(id));
    }

    @DeleteMapping(value = "/delete/{id}")
    private ResponseEntity<Void> deleteById(@PathVariable("id") int id) {
        clienteService.deleteById(id);
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @GetMapping(value = "/frequentClient")
    private ResponseEntity<Cliente> getMostfrequentClient() {
        return ResponseEntity.ok(clienteService.getMostfrequentClient());
    }

    @PutMapping(value = "/{id}/{new_name}")
    private HttpStatus updateNameById(@PathVariable("id") int id, @PathVariable("new_name") String new_name) {
        try {
            clienteService.updateNameById(id, new_name);
            return HttpStatus.OK;
        } catch (Exception e) {
            return HttpStatus.BAD_REQUEST;
        }
    }
}
