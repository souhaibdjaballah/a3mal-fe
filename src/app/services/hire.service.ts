import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { HirePost } from '../commons/hire-post';

@Injectable({
  providedIn: 'root'
})
export class HireService {


  private hireUrl = "http://localhost:8080/api/employer-posts";
  
  constructor(private http: HttpClient,
    private cookieService: CookieService) { }

  ngOnInit(): void {
  }

  getHirePosts(): Observable<HirePost[]> {
    const headers = {"Authorization": "Bearer " + this.cookieService.get("accessToken")};

    // console.warn("Token retrieved from hire service ", this.cookieService.get("accessToken"));

    return this.http.get<HirePost[]>(this.hireUrl, { headers });
  }
}
