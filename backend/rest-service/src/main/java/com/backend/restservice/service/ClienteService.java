package com.backend.restservice.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.restservice.entity.Cliente;
import com.backend.restservice.repository.ClienteRepository;

@Service
public class ClienteService {

    @Autowired
    private ClienteRepository clienteRepository;

    public Cliente create(Cliente cliente) {
        return clienteRepository.save(cliente);
    }

    public List<Cliente> getAllClientes() {
        return clienteRepository.findAll();
    }

    public Optional<Cliente> findById(int id) {
        return clienteRepository.findById(id);
    }

    public void deleteById(int id) {
        clienteRepository.deleteById(id);
    }

    public Cliente getMostfrequentClient() {
        return clienteRepository.getMostfrequentClient();
    }

    public void updateNameById(int id, String name) {
        Cliente modified_cliente = clienteRepository.findById(id).orElseThrow(IllegalArgumentException::new);
        modified_cliente.setNombre(name);

        clienteRepository.save(modified_cliente);
    }

}
