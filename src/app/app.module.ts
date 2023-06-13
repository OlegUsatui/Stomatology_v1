import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PromoComponent } from './sections/promo/promo.component';
import { ReviewsComponent } from './sections/reviews/reviews.component';
import { SharedModule } from './shared/shared.module';
import { ContactsComponent } from './sections/contacts/contacts.component';
import { SpecialistComponent } from './sections/specialist/specialist.component';
import {
  MakeAppointmentFormComponent
} from './sections/specialist/components/make-appointment-form/make-appointment-form.component';
import { AccommodationsComponent } from './sections/accommodations/accommodations.component';
import { PricesComponent } from './sections/prices/prices.component';


const Components = [
  AppComponent,
];

@NgModule({
  declarations: [
    ...Components,
    HeaderComponent,
    FooterComponent,
    SpecialistComponent,
    PromoComponent,
    ReviewsComponent,
    ContactsComponent,
    MakeAppointmentFormComponent,
    AccommodationsComponent,
    PricesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
