import { Component, OnInit } from '@angular/core';
import { HirePost } from '../commons/hire-post';
import { HireService } from '../services/hire.service';

@Component({
  selector: 'app-hire-listing',
  templateUrl: './hire-listing.component.html',
  styleUrls: ['./hire-listing.component.css']
})
export class HireListingComponent implements OnInit {
  
  hirePosts?: HirePost[];

  constructor(private hireService: HireService) { }

  ngOnInit(): void {
    this.getHirePosts();
  }

  getHirePosts(): void{
    this.hireService.getHirePosts().subscribe(
      data => {
        this.hirePosts = data;
      }
    );
  }

}
