import { Component } from '@angular/core';
import { GeneralAccessService } from '../general-access.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {


  constructor(private formBuilder: FormBuilder, private generalAccess: GeneralAccessService) { }

  numero_cuenta: string = '';
  nombre_titular_cuenta: string = '';
  identificacion_titular_cuenta: string = '';

  numero_tarjeta: string = '';
  nombre_titular_tarjeta: string = '';
  identificacion_titular_tarjeta: string = '';
  fecha_vencimiento: string = '';
  codigo: string = '';

  nom_usuario: string = '';
  fecha_nacimiento: string = '';
  telefono_usuario: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';




  onSubmit() {

    const saldo_cuenta = this.generateRandomNumber(1000000, 100000000);
    const cupo_tarjeta = this.generateRandomNumber(1000000, 10000000);

    const jsonBankAccount = {
      numero_cuenta: this.numero_cuenta,
      nombre_titular_cuenta: this.nombre_titular_cuenta,
      identificacion_titular_cuenta: this.identificacion_titular_cuenta,
      saldo_cuenta: saldo_cuenta
    }

    const jsonCreditCard = {
      numero_tarjeta: this.numero_tarjeta,
      nombre_titular_tarjeta: this.nombre_titular_tarjeta,
      identificacion_titular_tarjeta: this.identificacion_titular_tarjeta,
      fecha_vencimiento: this.fecha_vencimiento,
      codigo_cvv: this.codigo,
      cupo_tarjeta: cupo_tarjeta
    }

    const jsonUser = {
      nom_usuario: this.nom_usuario,
      fecha_nacimiento: this.fecha_nacimiento,
      telefono_usuario: this.telefono_usuario,
      numero_cuenta: this.numero_cuenta,
      numero_tarjeta: this.numero_tarjeta,
      email: this.email,
      password: this.password,
      identificacion: this.identificacion_titular_cuenta
    }

    this.createBankAccount(jsonBankAccount);
    this.createCreditCard(jsonCreditCard);
    this.createUserAccount(jsonUser);
  }


  createBankAccount(bankAccount: object) {  
    this.generalAccess.createBankAccount(bankAccount)
      .then(response => {
        // Handle the response here
      })
      .catch(error => {
        // Handle errors here
    });
  }


  createCreditCard(creditCard: object) {

    this.generalAccess.createCreditCard(creditCard)
      .then(response => {
        // Handle the response here
      })
      .catch(error => {
        // Handle errors here
    });
  }

  createUserAccount(userAccount: object) {

    this.generalAccess.createUser(userAccount)
      .then(response => {
        alert('funciono');
        console.log(response);
      })
      .catch(error => {
        // Handle errors here
    });
  }
  

  generateRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}
