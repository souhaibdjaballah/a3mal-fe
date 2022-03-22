import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HirePost } from '../commons/hire-post';

@Injectable({
  providedIn: 'root'
})
export class HireService {

  constructor(private http: HttpClient,
    private cookieService: CookieService) { }


  getHirePosts(): Observable<HirePost[]> {
    const headers = {"Authorization": "Bearer " + this.cookieService.get("accessToken")};

    // console.warn("Token retrieved from hire service ", this.cookieService.get("accessToken"));

    return this.http.get<HirePost[]>(`${environment.apiUrl}/employer-posts`, { headers });
  }
}
