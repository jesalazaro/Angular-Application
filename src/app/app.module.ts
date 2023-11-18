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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
