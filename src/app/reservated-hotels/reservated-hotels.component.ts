import { Component, OnInit } from '@angular/core';
import { HotelDetails } from '../Interfaces/hotel-details';
import { StayHubService } from '../stay-hub.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservated-hotels',
  templateUrl: './reservated-hotels.component.html',
  styleUrl: './reservated-hotels.component.css'
})
export class ReservatedHotelsComponent implements OnInit{

  hotels: HotelDetails[] = [];
  filteredHotels: HotelDetails[] = [];
  selectedOption = 'Todos';


  constructor(private StayHubService: StayHubService, private router: Router) {

  }

  ngOnInit(): void {
    this.getHotels();

  }

  getHotels() {
    this.StayHubService.getHotels()
      .then(response => {
        this.filteredHotels = response.data;
        this.hotels = response.data
      }).catch(error => {
        console.log(error);
      });
  }

  redirectToDetails(productId: number) {
    this.router.navigate(['/details-hotel-edit', productId]);
  }


}
