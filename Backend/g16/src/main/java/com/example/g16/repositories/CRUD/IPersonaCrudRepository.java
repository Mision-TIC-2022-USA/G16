/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.example.g16.repositories.CRUD;

import com.example.g16.Models.Persona;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 *
 * @author ASUS RYZEN
 */
public interface IPersonaCrudRepository extends MongoRepository<Persona, Integer> {
    
}
