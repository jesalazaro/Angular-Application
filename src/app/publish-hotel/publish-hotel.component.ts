import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StayHubService } from '../stay-hub.service';
import { cityDetails } from '../Interfaces/city-details';
import { GeneralAccessService } from '../general-access.service';

@Component({
  selector: 'app-publish-hotel',
  templateUrl: './publish-hotel.component.html',
  styleUrls: ['./publish-hotel.component.css'] // Change to an array by adding square brackets
})
export class PublishHotelComponent implements OnInit {

  hotelForm!: FormGroup;
  cities: cityDetails[] = [];


  constructor(private formBuilder: FormBuilder, private stayHubService: StayHubService, private generalAccessService: GeneralAccessService) { }

  ngOnInit(): void {
    this.initializeForm();
    this.getCitys();
  }

  initializeForm() {
    this.hotelForm = this.formBuilder.group({
      direccion: ['', Validators.required],
      tipo_propiedad: ['', Validators.required],
      numero_habitaciones: ['', Validators.required],
      numero_banos: ['', Validators.required],
      numero_cuenta: [sessionStorage.getItem("account")],
      id_usuario: [sessionStorage.getItem("userId")],
      valor_noche: ['', Validators.required],
      disponible: [1],
      ciudad: this.formBuilder.group({
        id_ciudad: [],
        nombre_ciudad: ['', Validators.required],
        pais: ['colombia']
      })
    });
  }

  onSubmit() {

    if (this.hotelForm.valid) {
      const selectedCity = this.hotelForm.get(['ciudad', 'nombre_ciudad'])!.value
      const city = this.cities.find(obj => obj.nombre_ciudad === selectedCity);
      (<FormGroup>this.hotelForm.controls['ciudad']).controls['id_ciudad'].patchValue(city?.id_ciudad);
      console.log(city?.id_ciudad)
      this.createCar()
    } else {
      // Handle invalid form
      alert('Please fill in all required fields.');
    }
  }


  createCar() {

    this.stayHubService.postHotel(this.hotelForm.getRawValue())
      .then(response => {
        // Handle the response here
        alert("Auto Publicado")
        this.hotelForm.reset();
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
