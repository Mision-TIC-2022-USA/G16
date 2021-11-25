/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.g16.Models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 *
 * @author ASUS RYZEN
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "personas")
public class Persona {
    
    @Id
    private Integer id;
    private String nombre;
    private Integer edad;
    private String email;
}
