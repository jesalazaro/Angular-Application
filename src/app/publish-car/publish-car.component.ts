import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DriveEaseService } from '../drive-ease.service';

@Component({
  selector: 'app-publish-car',
  templateUrl: './publish-car.component.html',
  styleUrl: './publish-car.component.css'
})
export class PublishCarComponent implements OnInit {

  carForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private driveEaseService: DriveEaseService) { }

  ngOnInit(): void {
    this.initializeForm();
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

      this.createCar()
    } else {
      // Handle invalid form
      alert('Please fill in all required fields.');
    }
  }


  createCar() {

    this.driveEaseService.postData(this.carForm.getRawValue())
      .then(response => {
        // Handle the response here
        alert("Auto Publicado")
      })
      .catch(error => {
        // Handle errors here
      });
  }
}
