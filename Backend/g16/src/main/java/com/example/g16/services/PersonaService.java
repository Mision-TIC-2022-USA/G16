/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.g16.services;

import com.example.g16.Models.Persona;
import com.example.g16.repositories.PersonaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author ASUS RYZEN
 */
@Service
public class PersonaService {

    @Autowired
    private PersonaRepository personaRepository;

    public List<Persona> getAll() {
        return personaRepository.getAll();
    }
}
