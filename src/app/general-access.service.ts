import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import axios, { AxiosError, AxiosResponse } from 'axios';


@Injectable({
  providedIn: 'root'
})
export class GeneralAccessService {

  constructor() { }

  url = 'http://localhost:8080'


  getUser(email: string, contrasena: string) {
    return axios.get(`${this.url}/api/usuarios/buscarusu/${email}/${contrasena}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  async createBankAccount(data: object) {
    const apiUrl = `${this.url}/api/cuenta/createcuenta`;
    try {
      const response = await axios.post(apiUrl, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async createCreditCard(data: object) {
    const apiUrl = `${this.url}/api/tcredito/createtcredito`;
    try {
      const response = await axios.post(apiUrl, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async createUser(data: object) {
    const apiUrl = `${this.url}/api/usuarios/createus`;
    try {
      const response = await axios.post(apiUrl, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  
}
