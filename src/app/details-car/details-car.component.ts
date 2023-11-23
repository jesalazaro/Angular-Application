import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DriveEaseService } from '../drive-ease.service';
import { CarDetails } from '../Interfaces/car-details';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-details-car',
  templateUrl: './details-car.component.html',
  styleUrl: './details-car.component.css'
})


export class DetailsCarComponent implements OnInit {


  constructor(private driveEaseService: DriveEaseService, private route: ActivatedRoute, private router: Router) {
    this.range.valueChanges.subscribe(value => {

      const start = this.range.get('start')!.value;
      const end = this.range.get('end')!.value;
      var Difference_In_Time = end!.getTime() - start!.getTime();
      var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
      this.days = Difference_In_Days;
      this.total_value = this.days * this.precioDia;

      if (start !== null && end != null) {
        const startString = start.toString();
        const endString = end.toString();
        sessionStorage.setItem("startDate", startString);
        sessionStorage.setItem("endDate", endString);
      }
    });
  }

  carId!: number;
  car!: CarDetails;
  precioDia = 0;
  days = 0;
  total_value = 0;
  start = sessionStorage.getItem("startDate");
  end = sessionStorage.getItem("endDate");
  todayDate: Date = new Date();
  startDate!: Date;
  endDate!: Date;


  ngOnInit(): void {
    this.getCar();
    if (this.start != null) {
      this.startDate = new Date(this.start);
      this.range.get('start')!.setValue(this.startDate);
    }
    if (this.end != null) {
      this.endDate = new Date(this.end);
      this.range.get('end')!.setValue(this.endDate);
    }
  }



  range = new FormGroup({
    start: new FormControl<Date | null>(null, Validators.required),
    end: new FormControl<Date | null>(null, Validators.required),
  });



  getCar() {
    this.carId = this.route.snapshot.params['id'];
    this.days = this.route.snapshot.params['days'];
    console.log(this.total_value);
    this.driveEaseService.getCar(this.carId)
      .then(response => {
        this.car = response.data;
        this.precioDia = response.data.precio_dia;
        this.total_value = this.precioDia * this.days;
      }).catch(error => {
        console.log(error);
      });
  }

  redirectToPayment() {
    this.router.navigate(['/payment', this.carId, this.total_value]);
  }

}
