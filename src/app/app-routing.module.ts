import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ListingPageComponent } from './components/listing-page/listing-page.component';
import { LoginComponent } from './components/login/login.component';
import { HireListingComponent } from './hire-listing/hire-listing.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WorkListingComponent } from './work-listing/work-listing.component';


const routes: Routes = [
  {
    path: 'listing-page', component: ListingPageComponent,
    children: [
      { path: 'hire-listing', component: HireListingComponent },
      { path: 'work-listing', component: WorkListingComponent },
      { path: '', redirectTo: 'hire-listing', pathMatch: 'full'},
    ]
  },
  { path: 'home', component: LandingPageComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }