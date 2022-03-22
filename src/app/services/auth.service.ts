import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NotExpr } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { Tokens } from '../commons/tokens';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  httpOptions = {
    headers: new HttpHeaders({
      "Authorization": "Bearer " + this.cookieService.get("refreshToken") })
  };

  constructor(private http: HttpClient, private cookieService: CookieService) {

  }

  ngOnInit(): void {

  }

  /**
   * Checks whether a user is logged in by verifing the stored access token (if any) expiry time.
   * (This might be replaced by simply setting a cookie of the expiry time when the first login or refresh token is used)
   */
  isLoggedIn() {
    throw new Error('Method not implemented.');
  }

  requestTokens(username: string, password: string): Observable<Tokens> {

    const formData = new FormData();

    // append your data
    formData.append('username', username);
    formData.append('password', password);

    return this.http.post<Tokens>(`${environment.apiUrl}/login`, formData);
  }

  refreshAccessToken(refreshToken: string): Observable<Tokens> {

    return this.http.get<Tokens>(`${environment.apiUrl}/token/refresh`, this.httpOptions);
  }
  

}
