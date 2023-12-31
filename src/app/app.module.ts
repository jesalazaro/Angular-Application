import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatAutocompleteModule } from '@angular/material/autocomplete';


import { ReactiveFormsModule } from '@angular/forms';
import { SearchCarComponent } from './search-car/search-car.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PublishCarComponent } from './publish-car/publish-car.component';
import { DetailsCarComponent } from './details-car/details-car.component';
import { SearchHotelComponent } from './search-hotel/search-hotel.component';
import { FormsModule } from '@angular/forms';
import { PublishedCarsComponent } from './published-cars/published-cars.component';
import { DetailsCarEditComponent } from './details-car-delete/details-car-edit.component';
import { ReservatedCarsComponent } from './reservated-cars/reservated-cars.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PaymentComponent } from './payment/payment.component';
import { GeneralPageComponent } from './general-page/general-page.component';
import { StartPageComponent } from './start-page/start-page.component';
import { DetailsHotelComponent } from './details-hotel/details-hotel.component';
import { DetailsHotelDeleteComponent } from './details-hotel-delete/details-hotel-delete.component';
import { PublishHotelComponent } from './publish-hotel/publish-hotel.component';
import { PublishedHotelsComponent } from './published-hotels/published-hotels.component';
import { ReservatedHotelsComponent } from './reservated-hotels/reservated-hotels.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    SearchCarComponent,
    NavbarComponent,
    PublishCarComponent,
    DetailsCarComponent,
    SearchHotelComponent,
    PublishedCarsComponent,
    DetailsCarEditComponent,
    ReservatedCarsComponent,
    LoginComponent,
    RegisterComponent,
    PaymentComponent,
    GeneralPageComponent,
    StartPageComponent,
    DetailsHotelComponent,
    DetailsHotelDeleteComponent,
    PublishHotelComponent,
    PublishedHotelsComponent,
    ReservatedHotelsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
