import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HirePost } from '../commons/hire-post';
import { HireService } from '../services/hire.service';

@Component({
  selector: 'app-hire-listing',
  templateUrl: './hire-listing.component.html',
  styleUrls: ['./hire-listing.component.css']
})
export class HireListingComponent implements OnInit {

  hirePosts?: HirePost[];

  constructor(
    private hireService: HireService,
    private router: Router) { }

  ngOnInit(): void {
    this.getHirePosts();
  }

  getHirePosts(): void {
    this.hireService.getHirePosts().subscribe(
      {
        next: data => {
          this.hirePosts = data;

          console.warn("Data length - out ", data.length)

          if (data.length == null) { // this needs to be replaced with promises chaining
            // const obj = data as unknown as { error_message: string };
            // console.warn("Data :", obj);
            // if (obj.error_message) {
            console.warn("Data length - in ", data.length)
            this.router.navigate(["/login"]);
            // }
          }
        },
        error: () => {
          console.warn("Error caught ");
          this.router.navigate(["/login"]);
        }
      }
    );
  }

}
