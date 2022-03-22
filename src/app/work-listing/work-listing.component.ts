import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WorkPost } from '../commons/work-post';
import { WorkService } from '../services/work.service';

@Component({
  selector: 'app-work-listing',
  templateUrl: './work-listing.component.html',
  styleUrls: ['./work-listing.component.css']
})
export class WorkListingComponent implements OnInit {

  workPosts?: WorkPost[];

  constructor(
    private workService: WorkService,
    private router: Router) { }

  ngOnInit(): void {
    this.getWorkPosts();
  }

  getWorkPosts(): void {
    this.workService.getWorkPosts().subscribe(
      data => {
        this.workPosts = data;
        if (data.length == null) { // this needs to be replaced with promises chaining // null == undefined // null more conventional
          this.router.navigate(["/login"]);
        }
      }
    );
  }

}
