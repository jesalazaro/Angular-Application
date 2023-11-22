import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DriveEaseService } from '../drive-ease.service';
import { CarDetails } from '../Interfaces/car-details';

@Component({
  selector: 'app-details-car',
  templateUrl: './details-car.component.html',
  styleUrl: './details-car.component.css'
})


export class DetailsCarComponent implements OnInit {


  constructor(private driveEaseService: DriveEaseService, private route: ActivatedRoute, private router: Router) { }

  carId!: number;
  car!: CarDetails;
  days = 0;
  total_value = 0;
  price = 100000;

  ngOnInit(): void {
    this.getCar();
  }

  getCar() {
    this.carId = this.route.snapshot.params['id'];
    this.days = this.route.snapshot.params['days'];
    this.total_value = this.price*this.days;
    console.log(this.total_value);
    this.driveEaseService.getCar(this.carId)
      .then(response => {
        this.car = response.data;
  
      }).catch(error => {
        console.log(error);
      });
  }

  redirectToPayment(productId: number) {
    this.router.navigate(['/payment']);
  }
  
}
