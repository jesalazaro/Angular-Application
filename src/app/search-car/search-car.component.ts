import { Component, OnInit } from '@angular/core';
import { CarDetails } from '../Interfaces/car-details';
import { DriveEaseService } from '../drive-ease.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-drive-ease',
  templateUrl: './search-car.component.html',
  styleUrl: './search-car.component.css'
})
export class SearchCarComponent implements OnInit {

  todayDate: Date = new Date();
  appointment_date = '';
  cars: CarDetails[] = [];
  filteredCars: CarDetails[] = [];
  total_cars: CarDetails[] = [];
  selectedOption = 'Todos';
  userId = sessionStorage.getItem("userId");

  range = new FormGroup({
    start: new FormControl<Date | null>(null, Validators.required),
    end: new FormControl<Date | null>(null, Validators.required),
  });

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
        this.filteredCars = this.filteredCars.filter(item => item.id_usuario !== filterUserId);
        this.cars = this.filteredCars;
        this.total_cars = this.filteredCars;
      }).catch(error => {
        console.log(error);
      });
  }


  getCarsByCity(city: string) {
    this.driveEaseService.getCarsByCity(city)
      .then(response => {
        this.filteredCars = response.data;
        const filterUserId = Number(this.userId)
        this.filteredCars = this.filteredCars.filter(item => item.id_usuario !== filterUserId);
        this.filteredCars = this.filteredCars.filter(item => item.disponible !== 0);
      }).catch(error => {
        console.log(error);
      });
  }



  redirectToDetails(productId: number) {

    const start = this.range.get('start')!.value;

    const end = this.range.get('end')!.value;

    if (start !== null && end !== null) {

      const startString = start.toString();
      const endString = end.toString();

      sessionStorage.setItem("startDate", startString);
      sessionStorage.setItem("endDate", endString);


      var Difference_In_Time = end!.getTime() - start!.getTime();
      var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
      this.router.navigate(['/details-car', productId, Difference_In_Days]);

    } else {
      this.router.navigate(['/details-car', productId, 1]);
    }





  }

  filterResults(gamma: string, city: string) {

    // this.getCars();

    if (gamma != 'Todos' && city == 'Todos') {
      this.filteredCars = this.total_cars;
      this.cars = this.total_cars;

      this.filteredCars = this.cars.filter(
        car => car?.tipo_vehiculo.toLowerCase().includes(gamma.toLowerCase())
      );
    }

    else if (gamma == 'Todos' && city != 'Todos') {
      this.getCarsByCity(city);

      console.log(this.filteredCars)
    }

    else if (gamma != 'Todos' && city != 'Todos') {
      this.getCarsByCity(city);

      this.filteredCars = this.cars.filter(
        car => car?.tipo_vehiculo.toLowerCase().includes(gamma.toLowerCase())
      );
    }
    else {
      this.filteredCars = this.cars;
    }

  }


}

