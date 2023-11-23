import { Component, OnInit } from '@angular/core';
import { CarDetails } from '../Interfaces/car-details';
import { DriveEaseService } from '../drive-ease.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservated-cars',
  templateUrl: './reservated-cars.component.html',
  styleUrl: './reservated-cars.component.css'
})
export class ReservatedCarsComponent implements OnInit {

  cars: CarDetails[] = [];
  carsDetails: CarDetails[] = [];
  filteredCars: CarDetails[] = [];
  selectedOption = 'Todos';


  constructor(private driveEaseService: DriveEaseService, private router: Router) {

  }

  ngOnInit(): void {
    this.getCars();

  }

  getCars() {
    const userId = sessionStorage.getItem("userId")!;
    this.driveEaseService.getReservatedCars(userId)
      .then(response => {
        this.filteredCars = response.data;
        this.cars = response.data
        for (let i = 0; i < this.cars.length; i++) {
          this.getCarId(this.filteredCars[i].id_vehiculo, i);
        }
      }).catch(error => {
        console.log(error);
      });


  }


  // search details of cars

  getCarId(id: number, index: number) {

    this.driveEaseService.getCar(id)
      .then(response => {
        this.filteredCars[index].marca = response.data.marca;
        this.filteredCars[index].modelo = response.data.modelo;
        console.log(this.filteredCars)
      }).catch(error => {
        console.log(error);
      });
  }

  redirectToDetails(productId: number) {
    this.router.navigate(['/details-car-edit', productId]);
  }


}
