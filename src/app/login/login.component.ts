import { Component } from '@angular/core';
import { GeneralAccessService } from '../general-access.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  userData = [];

  constructor(private generalAccess: GeneralAccessService) { }

  onSubmit() {
    // Add your authentication logic here
    this.getUser();

  }

  getUser(){
    this.generalAccess.getUser(this.email, this.password).then(response => {
      this.userData = response.data;
      alert('usuario encontrado');
      alert(response.data);
    }).catch(error => {
      console.log(error);
    });

  }
}
