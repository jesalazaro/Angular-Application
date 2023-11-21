import { Component, OnInit } from '@angular/core';
import { DriveEaseService } from '../drive-ease.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CarDetails } from '../Interfaces/car-details';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-details-car-edit',
  templateUrl: './details-car-edit.component.html',
  styleUrl: './details-car-edit.component.css'
})
export class DetailsCarEditComponent implements OnInit {

  constructor(private driveEaseService: DriveEaseService, private route: ActivatedRoute, private formBuilder: FormBuilder,  private router: Router) { }

  carId!: number;

  ngOnInit(): void {
    this.initializeForm();
    this.getCar();
  }




  car!: CarDetails;
  carForm!: FormGroup;


  getCar() {
    this.carId = this.route.snapshot.params['id'];
    this.driveEaseService.getCar(this.carId)
      .then(response => {
        this.car = response.data;
        this.setFormValues();
      }).catch(error => {
        console.log(error);
      });
  }

  setFormValues() {
    this.carForm.controls['registrationNr'].setValue(this.car.numero_placa);
    this.carForm.controls['brand'].setValue(this.car.marca);
    this.carForm.controls['model'].setValue(this.car.modelo);
    this.carForm.controls['type'].setValue(this.car.tipo_vehiculo);
    this.carForm.controls['kmTraveled'].setValue(this.car.kilometraje);
  }

  initializeForm() {

    this.carForm = this.formBuilder.group({
      registrationNr: ['', Validators.required],
      brand: ['', Validators.required],
      model: ['', Validators.required],
      isAvailable: true,
      type: ['', Validators.required],
      kmTraveled: [null, Validators.required]
    });
  }

  onSubmit() {

    if (this.carForm.valid) {
      // Log or send the form data to a service
      console.log(this.carForm.value);

      this.updateCar()
    } else {
      // Handle invalid form
      alert('Please fill in all required fields.');
    }
  }


  updateCar() {
    this.driveEaseService.updateCar(this.carForm.getRawValue(), this.route.snapshot.params['id'])
      .then(response => {
        // Handle the response here
        alert("Vehiculo actualizado")
        this.router.navigate(['/published-cars']);
      })
      .catch(error => {
        // Handle errors here
      });
  }

  deleteCar() {
    this.carId = this.route.snapshot.params['id'];
    this.driveEaseService.deleteCar(this.carId)
      .then(response => {
        alert("Vehículo eliminado");
        this.router.navigate(['/published-cars']);
      }).catch(error => {
        console.log(error);
      });
  }
}
