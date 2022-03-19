import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { WorkPost } from '../commons/work-post';

@Injectable({
  providedIn: 'root'
})
export class WorkService {

  private workUrl = "http://localhost:8080/api/employee-posts";

  constructor(private http: HttpClient,
    private cookieService: CookieService) { }

  getWorkPosts(): Observable<WorkPost[]> {
    const headers = {"Authorization": "Bearer " + this.cookieService.get("accessToken")};

    return this.http.get<WorkPost[]>(this.workUrl, { headers });
  }
}
