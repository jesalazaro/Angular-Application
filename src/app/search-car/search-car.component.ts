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
  selectedOption = 'Todos';


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
        this.cars = response.data
      }).catch(error => {
        console.log(error);
      });
  }

  testResult(){
    const start = this.range.get('start')!.value;
    const end = this.range.get('end')!.value;

    var Difference_In_Time = end!.getTime() - start!.getTime(); 
    
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 
    console.log(Difference_In_Days);

  }

  redirectToDetails(productId: number) {

    const start = this.range.get('start')!.value;
    const end = this.range.get('end')!.value;

    var Difference_In_Time = end!.getTime() - start!.getTime(); 
    
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 
    console.log(Difference_In_Days);


    this.router.navigate(['/details-car', productId, Difference_In_Days]);

  }

  filterResults(gamma: string, model: string) {


    if (gamma != 'Todos' && model == 'Todos') {
      this.filteredCars = this.cars.filter(
        car => car?.tipo_vehiculo.toLowerCase().includes(gamma.toLowerCase())
      );
    }
    else if (gamma == 'Todos' && model != 'Todos') {
      this.filteredCars = this.cars.filter(
        car => car?.modelo.toLowerCase().includes(model.toLowerCase())
      );
    }
    else if (gamma != 'Todos' && model != 'Todos') {
      this.filteredCars = this.cars.filter(
        car => car?.tipo_vehiculo.toLowerCase().includes(gamma.toLowerCase()) && car?.modelo.toLowerCase().includes(model.toLowerCase())
      );
    }
    else {
      this.filteredCars = this.cars;
    }

  }


}

