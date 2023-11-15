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


  constructor(private driveEaseService: DriveEaseService, private route: ActivatedRoute) { }

  carId!: number;

  ngOnInit(): void {

    this.getCar();
  }




  car!: CarDetails ;

  getCar() {

    this.carId = this.route.snapshot.params['id'];

    this.driveEaseService.getCar(this.carId)
      .then(response => {
        this.car = response.data;

      }).catch(error => {

        console.log(error);

      });

  }



}
