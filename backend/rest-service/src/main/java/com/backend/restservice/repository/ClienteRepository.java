package com.backend.restservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.backend.restservice.entity.Cliente;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Integer> {
    // @Query("SELECT c FROM Cliente c WHERE c.id = ?1")
    // Optional<Cliente> findById(int id);

    // Void deleteById(int id);

    @Query("SELECT c FROM Cliente c INNER JOIN Alquiler a ON c.id = a.cliente_id GROUP BY c.id ORDER BY COUNT(*) DESC LIMIT 1")
    Cliente getMostfrequentClient();
}
