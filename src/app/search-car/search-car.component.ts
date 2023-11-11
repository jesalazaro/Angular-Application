import { Component, OnInit } from '@angular/core';
import { CarDetails } from '../Interfaces/car-details';
import { DriveEaseService } from '../drive-ease.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-drive-ease',
  templateUrl: './search-car.component.html',
  styleUrl: './search-car.component.css'
})
export class SearchCarComponent implements OnInit {

  cars: CarDetails[] = [];

  constructor(private driveEaseService: DriveEaseService, private router: Router) {}

  ngOnInit(): void {
    this.getCars();
  }

  getCars() {
    this.driveEaseService.getCars()
      .then(response => {
        this.cars = response.data;
      }).catch(error => {
        console.log(error);
      });
  }

  redirectToDetails(productId: number) {
    this.router.navigate(['/details-car', productId]);
  }



}

