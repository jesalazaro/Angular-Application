import { Component } from '@angular/core';
import { StayHubService } from '../stay-hub.service';
import { Router } from '@angular/router';
import { GeneralAccessService } from '../general-access.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HotelDetails } from '../Interfaces/hotel-details';
import { cityDetails } from '../Interfaces/city-details';

@Component({
  selector: 'app-search-hotel',
  templateUrl: './search-hotel.component.html',
  styleUrl: './search-hotel.component.css'
})
export class SearchHotelComponent {
  cities: cityDetails[] = [];
  todayDate: Date = new Date();
  appointment_date = '';
  hotels: HotelDetails[] = [];
  filteredHotels: HotelDetails[] = [];
  total_hotels: HotelDetails[] = [];
  selectedOption = 'Todos';
  userId = sessionStorage.getItem("userId");

  range = new FormGroup({
    start: new FormControl<Date | null>(null, Validators.required),
    end: new FormControl<Date | null>(null, Validators.required),
  });

  constructor(private stayHubService: StayHubService, private router: Router, private generalAccessService: GeneralAccessService) {

  }

  ngOnInit(): void {
    this.getHotels();
    this.getCitys();
  }



  getHotels() {
    this.stayHubService.getHotels()
      .then(response => {
        this.filteredHotels = response.data;
        const filterUserId = Number(this.userId);
        this.filteredHotels = this.filteredHotels.filter(item => item.id_usuario !== filterUserId);
        this.hotels = this.filteredHotels;
        this.total_hotels = this.filteredHotels;
      }).catch(error => {
        console.log(error);
      });
  }


  getCitys() {
    this.generalAccessService.getCitys()
      .then(response => {
        this.cities = response.data;
        this.cities = this.cities.filter(item => item.pais == 'colombia');

      }).catch(error => {
        console.log(error);
      });
  }

  // getHotelsByCity(city: string) {
  //   this.stayHubService.getHotelsByCity(city)
  //     .then(response => {
  //       this.filteredHotels = response.data;
  //       const filterUserId = Number(this.userId)
  //       this.filteredHotels = this.filteredHotels.filter(item => item.id_usuario !== filterUserId);
  //       this.filteredHotels = this.filteredHotels.filter(item => item.disponible !== 0);
  //     }).catch(error => {
  //       console.log(error);
  //     });
  // }



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

    // this.getHotels();

    // if (gamma != 'Todos' && city == 'Todos') {
    //   this.filteredHotels = this.total_hotels;
    //   this.hotels = this.total_hotels;

    //   this.filteredHotels = this.hotels.filter(
    //     car => car?.tipo_hotel.toLowerCase().includes(gamma.toLowerCase())
    //   );
    // }

    // else if (gamma == 'Todos' && city != 'Todos') {
    //   this.getHotelsByCity(city);

    //   console.log(this.filteredHotels)
    // }

    // else if (gamma != 'Todos' && city != 'Todos') {
    //   this.getHotelsByCity(city);

    //   this.filteredHotels = this.hotels.filter(
    //     car => car?.tipo_hotel.toLowerCase().includes(gamma.toLowerCase())
    //   );
    // }
    // else {
    //   this.filteredHotels = this.hotels;
    // }

  }
}
