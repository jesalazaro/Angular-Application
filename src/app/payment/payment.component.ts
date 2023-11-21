import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralAccessService } from '../general-access.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent implements OnInit{

  paymentForm!: FormGroup;
  userId: string | null | undefined;
  valor_total = 0;
  id_car = 0;
  dias = 0;

  constructor(private formBuilder: FormBuilder, private generalAccessService: GeneralAccessService ) { }

  ngOnInit(): void {
      this.initializeForm();
      this.paymentForm.controls['valor_total'].setValue(this.valor_total);
      this.userId = sessionStorage.getItem("userId");
  }

  onSubmit() {
 
    if (this.paymentForm.valid) {
      // Log or send the form data to a service
      console.log(this.paymentForm.value);

    } else {
      // Handle invalid form
      alert('Please fill in all required fields.');
    }
  }


  
  executePayment() {
    const id_car = 0;
    const user_id = 0;
    const valor_total = this.valor_total*this.dias;
    const medio_pago = 1;
    this.generalAccessService.paymentCar(id_car, user_id, valor_total, medio_pago)
      .then(response => {
          console.log(response.data)
      }).catch(error => {
        console.log(error);
      });
  }


  
  initializeForm() {
    this.paymentForm = this.formBuilder.group({
      medio_pago: ['', Validators.required],
      valor_total: [0]
    });
  }

}
