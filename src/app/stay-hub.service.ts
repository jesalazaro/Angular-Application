import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form, FormGroup } from '@angular/forms';
import axios, { AxiosError, AxiosResponse } from 'axios';


@Injectable({
  providedIn: 'root'
})
export class StayHubService {


  url = 'http://localhost:8080'
  
  constructor() { }

  getHotels() {
    return axios.get(`${this.url}/module/hotels`, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }


  getHotel(id: number) {
    return axios.get(`${this.url}/module/hotels/${id}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }



  async postHotel(data: FormGroup) {
    const apiUrl = `${this.url}/module/hotels`;
    try {
      const response = await axios.post(apiUrl, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async deleteHotel(id: number) {
    const apiUrl = `${this.url}/module/hotels/${id}`;
    try {
      const response = await axios.delete(apiUrl);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async updateHotel(data: FormGroup, id: number) {
    const apiUrl = `${this.url}/module/hotels/${id}`;
    try {
      const response = await axios.put(apiUrl, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }


}


