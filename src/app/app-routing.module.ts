import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchCarComponent } from './search-car/search-car.component';
import { PublishCarComponent } from './publish-car/publish-car.component';
import { DetailsCarComponent } from './details-car/details-car.component';
import { SearchHotelComponent } from './search-hotel/search-hotel.component';
import { PublishedCarsComponent } from './published-cars/published-cars.component';
import { DetailsCarEditComponent } from './details-car-delete/details-car-edit.component';
import { ReservatedCarsComponent } from './reservated-cars/reservated-cars.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PaymentComponent } from './payment/payment.component';
import { GeneralPageComponent } from './general-page/general-page.component';
import { StartPageComponent } from './start-page/start-page.component';
import { PublishHotelComponent } from './publish-hotel/publish-hotel.component';
import { DetailsHotelComponent } from './details-hotel/details-hotel.component';
import { PublishedHotelsComponent } from './published-hotels/published-hotels.component';
import { ReservatedHotelsComponent } from './reservated-hotels/reservated-hotels.component';

const routes: Routes = [
  {path: 'search-car', component: SearchCarComponent },
  {path: 'publish-car', component: PublishCarComponent},
  {path: 'details-car/:id/:days', component: DetailsCarComponent},
  {path: 'published-cars', component: PublishedCarsComponent},
  {path: 'details-car-edit/:id', component: DetailsCarEditComponent},
  {path: 'reservated-cars', component: ReservatedCarsComponent},

  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'payment/:carId/:total', component: PaymentComponent},
  {path: 'general', component: GeneralPageComponent},
  {path: '', component: StartPageComponent},

  {path: 'search-hotel', component: SearchHotelComponent},
  {path: 'publish-hotel', component: PublishHotelComponent},
  {path: 'published-hotel', component: PublishedHotelsComponent},
  {path: 'details-hotel/:id', component: DetailsHotelComponent},
  {path: 'reservated-hotels', component: ReservatedHotelsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
