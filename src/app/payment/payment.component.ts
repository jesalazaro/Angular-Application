import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent implements OnInit{

  paymentForm!: FormGroup;

  valor_total = 0;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
      this.initializeForm();
      this.paymentForm.controls['valor_total'].setValue(this.valor_total);
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


  
  initializeForm() {
    this.paymentForm = this.formBuilder.group({
      medio_pago: ['', Validators.required],
      valor_total: [0]
    });
  }

}
