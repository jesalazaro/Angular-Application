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

  constructor(private generalAccess: GeneralAccessService, private router: Router) { }

  onSubmit() {
    // Add your authentication logic here
    this.getUser();

  }

  getUser() {
    this.generalAccess.getUser(this.email, this.password).then(response => {
      this.userData = response.data;
      this.sendUserId(response.data.id_usuario);
    }).catch(error => {
      console.log(error);
    });
  }

  sendUserId(idUsuario: string) {
    this.generalAccess.changeUserId(idUsuario);
    this.router.navigate(['/general']);
  }

}
