/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/springframework/RestController.java to edit this template
 */
package com.example.g16.controllers;

import com.example.g16.Models.Persona;
import com.example.g16.services.PersonaService;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 *
 * @author ASUS RYZEN
 */
@RestController
@RequestMapping("/api/persona")
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
public class PersonaController {

    @Autowired
    private PersonaService personaService;

    @GetMapping("/all")
    public List<Persona> getAll() {
        return personaService.getAll();
    }

    @GetMapping("/{id}")
    public Persona getById(@PathVariable Integer id) {
        return personaService.getById(id);
    }

    @PutMapping("/update")
    public ResponseEntity<Persona> update(@RequestBody Persona persona) {
        Persona p = personaService.update(persona);
        return new ResponseEntity(p, HttpStatus.CREATED);
    }

    @PostMapping("/save")
    public ResponseEntity<Persona> save(@RequestBody Persona persona) {
        Persona p = personaService.save(persona);
        return new ResponseEntity(p, HttpStatus.CREATED);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity delete(@PathVariable Integer id) {
        personaService.delete(id);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
