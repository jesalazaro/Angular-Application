import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form, FormGroup } from '@angular/forms';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DriveEaseService {
  private apiUrl = 'https://your-api-endpoint.com/cars';

  constructor() { }

  getCars() {
    return axios.get('http://localhost:8080/module/cars', {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }


  getCar(id: number) {
    return axios.get(`http://localhost:8080/module/cars/${id}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }



  async postCar(data: FormGroup) {
    const apiUrl = 'http://localhost:8080/module/cars';
    try {
      const response = await axios.post(apiUrl, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async deleteCar(id: number) {
    const apiUrl = `http://localhost:8080/module/cars/${id}`;
    try {
      const response = await axios.delete(apiUrl);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async updateCar(data: FormGroup, id: number) {
    const apiUrl = `http://localhost:8080/module/cars/${id}`;
    try {
      const response = await axios.put(apiUrl, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }


}


