import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralAccessService } from '../general-access.service';
import { ActivatedRoute } from '@angular/router';
import { DriveEaseService } from '../drive-ease.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent implements OnInit {

  paymentForm!: FormGroup;
  userId: string | null | undefined;
  valor_total = 0;
  id_car = 0;
  dias = 0;

  constructor(private driveEaseService: DriveEaseService, private formBuilder: FormBuilder, private generalAccessService: GeneralAccessService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id_car = this.route.snapshot.params['carId'];
    this.valor_total = this.route.snapshot.params['total'];
    this.initializeForm();
    this.paymentForm.controls['valor_total'].setValue(this.valor_total);
    this.userId = sessionStorage.getItem("userId");
  }

  onSubmit() {

    if (this.paymentForm.valid) {
      // Log or send the form data to a service
      console.log(this.paymentForm.value);
      this.generalAccessService.paymentCar(this.id_car, this.userId, this.valor_total, 1)
        .then(response => {
          alert("Pago Realizado")
          this.reservateCar()
        }).catch(error => {
          console.log(error);
        });


    } else {
      // Handle invalid form
      alert('Please fill in all required fields.');
    }
  }


  reservateCar() {

    const start = sessionStorage.getItem("startDate")
    const end = sessionStorage.getItem("endDate")
    const creditCar = sessionStorage.getItem("creditCard");
    console.log(creditCar)
    if (start != null && end != null) {
      const startDate = new Date(start);
      const endDate = new Date(end);

      const dataReservation = {
        id_usuario: this.userId,
        id_vehiculo: this.id_car,
        numero_tarjeta: creditCar,
        fecha_inicio: startDate,
        fecha_fin: endDate
      }
      
      this.driveEaseService.postCarRented(dataReservation)
        .then(response => {
          alert("Auto Publicado")
        })
        .catch(error => {
          // Handle errors here
        });

    }
  }


  initializeForm() {
    this.paymentForm = this.formBuilder.group({
      medio_pago: ['', Validators.required],
      valor_total: [0]
    });
  }

}
