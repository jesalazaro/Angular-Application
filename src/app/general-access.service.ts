import { Injectable } from '@angular/core';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GeneralAccessService {


  private userIdSource = new BehaviorSubject<string>('');
  private moduleIdSource = new BehaviorSubject<string>('');
  private carPaymentValue = new BehaviorSubject<string>('');


  currentUserId = this.userIdSource.asObservable();
  currentModule = this.moduleIdSource.asObservable();
  currentCarPaymentValue = this.carPaymentValue.asObservable();

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

  changeUserId(userId: string) {
    this.userIdSource.next(userId);
    sessionStorage.setItem("userId", userId);

  }

  getCitys() {
    return axios.get(`${this.url}/api/ciudad/todasciudades`, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }


  changeModule(currentModule: string) {
    this.moduleIdSource.next(currentModule);
    sessionStorage.setItem("currentModule", currentModule);
  }



  paymentCar(idCar: number, idUser: string | null | undefined, totalValue: number, paymentType: number) {
    console.log(paymentType, totalValue, idUser, idCar)
    return axios.get(`${this.url}/api/vehiculos/execupago/${paymentType}/${totalValue}/${idUser}/${idCar}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  async postCarRented(data: object) {

    try {
      const response = await axios.post(`${this.url}/api/alquilar/alquilarsave`, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

}
