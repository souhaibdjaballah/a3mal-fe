import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListingPageComponent } from './components/listing-page/listing-page.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HireListingComponent } from './components/hire-listing/hire-listing.component';
import { WorkListingComponent } from './components/work-listing/work-listing.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { CookieService } from 'ngx-cookie-service';
import { ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { Location } from '@angular/common';
import { AuthService } from './services/auth.service';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    ListingPageComponent,
    LandingPageComponent,
    HireListingComponent,
    WorkListingComponent,
    PageNotFoundComponent,
    LoginComponent,
    SignUpComponent,
    AdminDashboardComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    CookieService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
