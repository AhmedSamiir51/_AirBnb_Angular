import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AccordionModule} from 'primeng/accordion';
import {MenuItem, MessageService} from 'primeng/api';
import {FileUploadModule} from 'primeng/fileupload';
import {CalendarModule} from 'primeng/calendar';
import { CommonModule }      from '@angular/common';
import {GMapModule} from 'primeng/gmap';
import {ButtonModule} from 'primeng/button';
import { CompareValidatorModule } from 'angular-compare-validator';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './Auth/register/register.component';
import { NavbarComponent } from './Shared/navbar/navbar.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { HomeComponent } from './page/home/home.component';
import { ExplorenerbyComponent } from './page/explorenerby/explorenerby.component';
import { LiveAnyWhereComponent } from './page/live-any-where/live-any-where.component';
import { DiscoverThingsComponent } from './page/discover-things/discover-things.component';
import { UserDetailsComponent } from './User/user-details/user-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { HostingComponent } from './hosting/hosting.component';
import { HousesComponent } from './testing/houses/houses/houses.component';
import { BookingComponent } from './testing/booking/booking/booking.component';
import { AllhousesComponent } from './testing/allhouses/allhouses.component';
import { DetailsComponent } from './testing/details/details.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {PasswordModule} from 'primeng/password';
import { PersonFeedbackComponent } from './person-feedback/person-feedback.component';
import {CarouselModule as Carousel} from 'primeng/carousel';
import { ErrorComponent } from './Error/error/error.component';
import { FilterPipe } from './pipes/filter.pipe';
import { PricePipe } from './pipes/price.pipe';





import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextModule} from 'primeng/inputtext';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ExplorenerbyComponent,
    LiveAnyWhereComponent,
    DiscoverThingsComponent,
    UserDetailsComponent,
    HostingComponent,
    HousesComponent,
    BookingComponent,
    AllhousesComponent,
    DetailsComponent,
    PersonFeedbackComponent,
    ErrorComponent,
    FilterPipe,
    PricePipe,
  ],
  imports: [AccordionModule,InputTextModule,ProgressBarModule,DropdownModule,DialogModule,ContextMenuModule,MultiSelectModule,SliderModule,ToastModule,TableModule,
    BrowserModule,NgxPaginationModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      progressBar: true
    }),
    BrowserAnimationsModule,
    FileUploadModule,
    CarouselModule,
    CommonModule,
    GMapModule,
    ButtonModule,
    PasswordModule,
    CompareValidatorModule,Carousel

  ],
  providers: [MessageService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
