import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  creditCard: string = '';

  onSubmit() {
    // Add your registration logic here
    console.log('Register clicked. Implement registration logic.');
  }

}
