import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StayHubService } from '../stay-hub.service';
import { HotelDetails } from '../Interfaces/hotel-details';

@Component({
  selector: 'app-details-hotel',
  templateUrl: './details-hotel.component.html',
  styleUrls: ['./details-hotel.component.css']
})
export class DetailsHotelComponent implements OnInit {

  constructor(private stayHubService: StayHubService, private route: ActivatedRoute, private router: Router) { }

  hotelId!: number;
  hotel!: HotelDetails; // Update the type

  ngOnInit(): void {
    this.getHotel();
  }

  getHotel() {
    this.hotelId = this.route.snapshot.params['id'];
    this.stayHubService.getHotel(this.hotelId)
      .then(response => {
        this.hotel = response.data;
      }).catch(error => {
        console.log(error);
      });
  }

  redirectToPayment(productId: number) {
    this.router.navigate(['/payment']);
  }
}
