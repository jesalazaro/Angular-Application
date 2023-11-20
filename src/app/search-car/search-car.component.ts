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
    this.router.navigate(['/details-car', productId]);
  }

  filterResults(gamma: string, model: string) {


    if (gamma != 'Todos' && model == 'Todos') {
      this.filteredCars = this.cars.filter(
        car => car?.type.toLowerCase().includes(gamma.toLowerCase())
      );
    }
    else if (gamma == 'Todos' && model != 'Todos') {
      this.filteredCars = this.cars.filter(
        car => car?.model.toLowerCase().includes(model.toLowerCase())
      );
    }
    else if (gamma != 'Todos' && model != 'Todos') {
      this.filteredCars = this.cars.filter(
        car => car?.type.toLowerCase().includes(gamma.toLowerCase()) && car?.model.toLowerCase().includes(model.toLowerCase())
      );
    }
    else {
      this.filteredCars = this.cars;
    }

  }


}

