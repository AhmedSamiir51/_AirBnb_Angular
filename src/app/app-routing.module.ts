import { BookingDataComponent } from './booking-data/booking-data.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { ErrorComponent } from './Error/error/error.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { DetailsComponent } from './testing/details/details.component';
import { AllhousesComponent } from './testing/allhouses/allhouses.component';
import { BookingComponent } from './testing/booking/booking/booking.component';
import { HostingComponent } from './hosting/hosting.component';
import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './Auth/register/register.component';
import { HomeComponent } from './page/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AuthGuard } from './Auth/auth/auth.guard';
import { HousesComponent } from './testing/houses/houses/houses.component';
import { PersonFeedbackComponent } from './person-feedback/person-feedback.component';

const routes: Routes = [

  {path:"home",component:HomeComponent },
  {path:"home/register",component:RegisterComponent},
  {path:"home/login",component:LoginComponent},
  {path:"Becomehost",component:HostingComponent},
  {path:"House",component:HousesComponent},
  {path:"Booking",component:BookingComponent},
  {path:"House/AllHouses/:City",component:AllhousesComponent},
  {path:"House/HousesBooking/:id",component:DetailsComponent},
  {path:"House/AllHouses",component:AllhousesComponent},
  {path:"House/detailsBooking/:id",component:BookingDataComponent},
  {path:"Feedback",component:PersonFeedbackComponent},
  {path:"Profile/:id",component:ProfileComponent},

  {path:"",redirectTo:"home",pathMatch:"full"},

  {path:'**',component:ErrorComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes),CarouselModule],
  exports: [RouterModule],
})
export class AppRoutingModule { }
