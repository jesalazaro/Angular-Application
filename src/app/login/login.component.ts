import { Component } from '@angular/core';
import { GeneralAccessService } from '../general-access.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  userData = {
    email: "",
    fecha_nacimiento: "",
    id_usuario: "",
    identificacion: "",
    nom_usuario: "",
    numero_cuenta: "",
    numero_tarjeta: "",
    password: "",
    telefono_usuario: "",
  };

  constructor(private generalAccessService: GeneralAccessService, private router: Router) { }

  onSubmit() {
    // Add your authentication logic here
    this.getUser();

  }

  getUser() {
    this.generalAccessService.getUser(this.email, this.password).then(response => {
      this.userData = response.data;
      this.sendUserId(response.data.id_usuario, response.data.numero_tarjeta, response.data.numero_cuenta);
    }).catch(error => {
      console.log(error);
    });
  }

  sendUserId(idUsuario: string, creditCard: string, account: string) {
    console.log(idUsuario, creditCard)
    this.generalAccessService.changeUserId(idUsuario);
    sessionStorage.setItem("creditCard", creditCard);
    sessionStorage.setItem("account", account);
    console.log(account)
    sessionStorage.getItem("creditCard");
    this.router.navigate(['/general']);
  }

}
