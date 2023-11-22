import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StayHubService } from '../stay-hub.service';

@Component({
  selector: 'app-publish-hotel',
  templateUrl: './publish-hotel.component.html',
  styleUrls: ['./publish-hotel.component.css'] // Change to an array by adding square brackets
})
export class PublishHotelComponent implements OnInit {

  hotelForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private stayHubService: StayHubService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.hotelForm = this.formBuilder.group({
      direccion: ['', Validators.required],
      tipo_propiedad: ['', Validators.required],
      numero_habitaciones: ['', Validators.required],
      isAvailable: true,
      numero_banos: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.hotelForm.valid) {
      // Log or send the form data to a service
      this.createHotel();
    } else {
      // Handle invalid form
      alert('Please fill in all required fields.');
    }
  }

  createHotel() {
    this.stayHubService.postHotel(this.hotelForm.getRawValue())
      .then(response => {
        // Handle the response here
        alert("Hotel Publicado");
      })
      .catch(error => {
        // Handle errors here
      });
  }
}
