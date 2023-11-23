import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
import { DriveEaseService } from '../drive-ease.service';
import { GeneralAccessService } from '../general-access.service';
import { cityDetails } from '../Interfaces/city-details';

@Component({
  selector: 'app-publish-car',
  templateUrl: './publish-car.component.html',
  styleUrl: './publish-car.component.css'
})
export class PublishCarComponent implements OnInit {

  carForm!: FormGroup;
  cities: cityDetails[] = [];
  constructor(private formBuilder: FormBuilder, private driveEaseService: DriveEaseService, private generalAccessService: GeneralAccessService) { }

  ngOnInit(): void {
    this.getCitys();
    this.initializeForm();
  }

  initializeForm() {
    this.carForm = this.formBuilder.group({
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      numero_placa: ['', Validators.required],
      kilometraje: ['', Validators.required],
      tipo_vehiculo: ['', Validators.required],
      numero_cuenta: [sessionStorage.getItem("account")],
      id_usuario: [sessionStorage.getItem("userId")],
      precio_dia: ['', Validators.required],
      disponible: [1],
      ciudad: this.formBuilder.group({
        id_ciudad: [],
        nombre_ciudad: ['', Validators.required],
        pais: ['colombia']
      })
    });
  }

  onSubmit() {

    if (this.carForm.valid) {
      const selectedCity = this.carForm.get(['ciudad','nombre_ciudad'])!.value
        const city = this.cities.find(obj => obj.nombre_ciudad === selectedCity );
        (<FormGroup>this.carForm.controls['ciudad']).controls['id_ciudad'].patchValue(city?.id_ciudad);
        console.log(city?.id_ciudad)
        this.createCar()
    } else {
      // Handle invalid form
      alert('Please fill in all required fields.');
    }
  }


  createCar() {

    this.driveEaseService.postCar(this.carForm.getRawValue())
      .then(response => {
        // Handle the response here
        alert("Auto Publicado")
      })
      .catch(error => {
        // Handle errors here
      });
  }

  getCitys() {
    this.generalAccessService.getCitys()
      .then(response => {
        this.cities = response.data;
        this.cities = this.cities.filter(item => item.pais == 'colombia');

      }).catch(error => {
        console.log(error);
      });
  }
}
