
import axios from 'axios';
//modificar la ip para produccion
//en mi caso 140.238.180.131
const ip = "localhost:8080";

const PERSONAS_API_BASE_URL = "http://"+ip;

export function getPersonas() {
  console.log(PERSONAS_API_BASE_URL);
    return axios.get(`${PERSONAS_API_BASE_URL}/api/persona/all`);
  }

  export function getPersona(id) {
    return axios.get(`${PERSONAS_API_BASE_URL}/api/persona/${id}`);
  }

  export function createPersona(persona) {
    return axios.post(`${PERSONAS_API_BASE_URL}/api/persona/save`, persona);
  }

  export function updatePersona(persona) {
    return axios.put(`${PERSONAS_API_BASE_URL}/api/persona/update`, persona);
  }

  export function deletePersona(id) {
    return axios.delete(`${PERSONAS_API_BASE_URL}/api/persona/delete/${id}`);
  }

  
