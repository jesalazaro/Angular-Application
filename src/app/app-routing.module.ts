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

const routes: Routes = [
  {path: 'search-car', component: SearchCarComponent },
  {path: 'publish-car', component: PublishCarComponent},
  {path: 'details-car/:id', component: DetailsCarComponent},
  {path: 'published-cars', component: PublishedCarsComponent},
  {path: 'search-hotel', component: SearchHotelComponent},
  {path: 'details-car-edit/:id', component: DetailsCarEditComponent},
  {path: 'reservated-cars', component: ReservatedCarsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'payment', component: PaymentComponent},
  {path: 'general', component: GeneralPageComponent},
  {path: '', component: StartPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
