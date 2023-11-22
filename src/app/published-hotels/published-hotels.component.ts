import { Component, OnInit } from '@angular/core';
import { HotelDetails } from '../Interfaces/hotel-details';
import { StayHubService } from '../stay-hub.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-published-hotels',
  templateUrl: './published-hotels.component.html',
  styleUrls: ['./published-hotels.component.css'] // Updated to styleUrls
})
export class PublishedHotelsComponent implements OnInit {

  hotels: HotelDetails[] = [];
  filteredHotels: HotelDetails[] = [];
  selectedOption = 'Todos';

  constructor(private stayHubService: StayHubService, private router: Router) {}

  ngOnInit(): void {
    this.getHotels();
  }

  getHotels() {
    this.stayHubService.getHotels()
      .then(response => {
        this.filteredHotels = response.data;
        this.hotels = response.data;
      }).catch(error => {
        console.log(error);
      });
  }

  redirectToDetails(productId: number) {
    this.router.navigate(['/details-hotel-edit', productId]);
  }
}
