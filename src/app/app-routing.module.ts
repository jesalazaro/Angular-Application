import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchCarComponent } from './search-car/search-car.component';
import { PublishCarComponent } from './publish-car/publish-car.component';
import { DetailsCarComponent } from './details-car/details-car.component';
import { SearchHotelComponent } from './search-hotel/search-hotel.component';
import { PublishedCarsComponent } from './published-cars/published-cars.component';
import { DetailsCarEditComponent } from './details-car-delete/details-car-edit.component';

const routes: Routes = [
  {path: 'search-car', component: SearchCarComponent },
  {path: 'publish-car', component: PublishCarComponent},
  {path: 'details-car/:id', component: DetailsCarComponent},
  {path: 'published-cars', component: PublishedCarsComponent},
  {path: 'search-hotel', component: SearchHotelComponent},
  {path: 'details-car-edit/:id', component: DetailsCarEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
