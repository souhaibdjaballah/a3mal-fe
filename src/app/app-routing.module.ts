import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ListingPageComponent } from './components/listing-page/listing-page.component';


const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'home', component: LandingPageComponent},
  {path: 'listing-page', component: ListingPageComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
