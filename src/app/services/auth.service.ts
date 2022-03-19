import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { Tokens } from '../commons/tokens';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginUrl = "http://localhost:8080/api/login";

  constructor(private http: HttpClient, private cookieService: CookieService) {

  }

  ngOnInit(): void {

  }

  requestTokens(username: string, password: string): Observable<Tokens> {

    // const headers = { 'Content-Type': 'application/json' };
    
    // let body = new URLSearchParams(); // or simply use `username=${username}&password=${password}`;
    // body.set('username', username);
    // body.set('password', password);

    // let options = {
    //   headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    // };

    const formData = new FormData();

    // append your data
    formData.append('username', username);
    formData.append('password', password);

    return this.http.post<Tokens>(this.loginUrl, formData);
  }

}
