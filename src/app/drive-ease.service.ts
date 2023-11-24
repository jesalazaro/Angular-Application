import { Injectable } from '@angular/core';
import { Form, FormGroup } from '@angular/forms';
import axios, { AxiosError, AxiosResponse } from 'axios';


@Injectable({
  providedIn: 'root'
})
export class DriveEaseService {


  url = 'http://localhost:8080/api/vehiculos'

  constructor() { }

  getCars() {
    return axios.get(`${this.url}/vehiculosdispo`, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }


  getCar(id: number) {
    return axios.get(`${this.url}/vehiculosxid/${id}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  getCarsByCity(idCity: string) {
    return axios.get(`${this.url}/buscarxciudad/${idCity}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  getReservatedCars(userId: string) {
    return axios.get(`http://localhost:8080/api/alquilar/alquilarxid/${userId}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }








  async postCar(data: FormGroup) {
    const apiUrl = `${this.url}/createCar`;
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


