import { Component, OnInit } from '@angular/core';
import { CarDetails } from '../Interfaces/car-details';
import { DriveEaseService } from '../drive-ease.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-published-cars',
  templateUrl: './published-cars.component.html',
  styleUrl: './published-cars.component.css'
})
export class PublishedCarsComponent implements OnInit {

  cars: CarDetails[] = [];
  filteredCars: CarDetails[] = [];
  selectedOption = 'Todos';
  userId = sessionStorage.getItem("userId");

  constructor(private driveEaseService: DriveEaseService, private router: Router) {

  }

  ngOnInit(): void {
    this.getCars();

  }

  getCars() {
    this.driveEaseService.getCars()
      .then(response => {
        this.filteredCars = response.data;
        const filterUserId = Number(this.userId);
        this.filteredCars = this.filteredCars.filter(item => item.id_usuario == filterUserId);
        this.cars = this.filteredCars;
      }).catch(error => {
        console.log(error);
      });
  }

  redirectToDetails(productId: number) {
    this.router.navigate(['/details-car-edit', productId]);
  }


}
