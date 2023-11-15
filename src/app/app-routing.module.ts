import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchCarComponent } from './search-car/search-car.component';
import { PublishCarComponent } from './publish-car/publish-car.component';
import { DetailsCarComponent } from './details-car/details-car.component';
import { SearchHotelComponent } from './search-hotel/search-hotel.component';

const routes: Routes = [
  {path: 'search-car', component: SearchCarComponent },
  {path: 'publish-car', component: PublishCarComponent},
  {path: 'details-car/:id', component: DetailsCarComponent},
  {path: 'search-hotel', component: SearchHotelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
