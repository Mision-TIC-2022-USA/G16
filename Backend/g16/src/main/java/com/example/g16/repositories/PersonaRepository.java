/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.g16.repositories;

import com.example.g16.Models.Persona;
import com.example.g16.repositories.CRUD.IPersonaCrudRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 *
 * @author ASUS RYZEN
 */
@Repository
public class PersonaRepository {

    @Autowired
    private IPersonaCrudRepository crudRepository;

    public List<Persona> getAll() {
        return crudRepository.findAll();
    }

    public Optional<Persona> getById(Integer id) {
        return crudRepository.findById(id);
    }

    public Persona save(Persona persona) {
        return crudRepository.save(persona);
    }

    public void delete(Integer id) {
        crudRepository.deleteById(id);
    }
}
