import { Component, OnInit } from '@angular/core';
import { CarDetails } from '../Interfaces/car-details';
import { DriveEaseService } from '../drive-ease.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservated-cars',
  templateUrl: './reservated-cars.component.html',
  styleUrl: './reservated-cars.component.css'
})
export class ReservatedCarsComponent implements OnInit{

  cars: CarDetails[] = [];
  filteredCars: CarDetails[] = [];
  selectedOption = 'Todos';


  constructor(private driveEaseService: DriveEaseService, private router: Router) {

  }

  ngOnInit(): void {
    this.getCars();

  }

  getCars() {
    this.driveEaseService.getCars()
      .then(response => {
        this.filteredCars = response.data;
        this.cars = response.data
      }).catch(error => {
        console.log(error);
      });
  }

  redirectToDetails(productId: number) {
    this.router.navigate(['/details-car-edit', productId]);
  }


}
