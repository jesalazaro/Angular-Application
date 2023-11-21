import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form, FormGroup } from '@angular/forms';
import axios, { AxiosError, AxiosResponse } from 'axios';


@Injectable({
  providedIn: 'root'
})
export class DriveEaseService {


  url = 'http://localhost:8080'
  
  constructor() { }

  getCars() {
    return axios.get(`${this.url}/module/cars`, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }


  getCar(id: number) {
    return axios.get(`${this.url}/module/cars/${id}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }




  async postCar(data: FormGroup) {
    const apiUrl = `${this.url}/module/cars`;
    try {
      const response = await axios.post(apiUrl, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async deleteCar(id: number) {
    const apiUrl = `${this.url}/module/cars/${id}`;
    try {
      const response = await axios.delete(apiUrl);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async updateCar(data: FormGroup, id: number) {
    const apiUrl = `${this.url}/module/cars/${id}`;
    try {
      const response = await axios.put(apiUrl, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }


}


