import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../commons/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // headers = {"Authorization": "Bearer " + this.cookieService.get("accessToken")};
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      "Authorization": "Bearer " + this.cookieService.get("accessToken") })
  };

  constructor(private http: HttpClient,
              private cookieService: CookieService) { }

  save(user: User): Observable<User> {

    // console.warn("UserService test ", user);
    return this.http.post<User>(`${environment.apiUrl}/user/save`, user);
  }

  update(user: User){
    return this.http.put<User>(`${environment.apiUrl}/user/update`, user, this.httpOptions);
  }

  getAllUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${environment.apiUrl}/users`, this.httpOptions);
  }

  getByUsername(username: string): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}/users/${username}`, this.httpOptions);
  }

  deleteByUsername(username: string){
    return this.http.delete<User>(`${environment.apiUrl}/users/${username}`, this.httpOptions);
  }
}