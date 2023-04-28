package com.backend.restservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backend.restservice.entity.Alquiler;

@Repository
public interface AlquilerRepository extends JpaRepository<Alquiler, Integer> {

}
