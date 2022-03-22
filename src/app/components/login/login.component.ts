import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Tokens } from 'src/app/commons/tokens';
import { User } from 'src/app/commons/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  tokens!: Tokens;
  tokenExpiryTime = this.cookieService.get("tokenExpiryTime") ? Number(this.cookieService.get("tokenExpiryTime")) : 0;

  loginForm!: FormGroup;
  // username?: string;
  user!: User;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private cookieService: CookieService,
    private router: Router,
    private location: Location) { }

  ngOnInit(): void {
    // console.warn("Token Expiry ngOnInit: ", this.tokenExpiryTime);

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    if (this.tokenExpiryTime != 0) {
      if (this.tokenExpiryTime > Date.now()) {
        // this.router.navigate(["/home"]);
        this.location.back();
      } else {
        // this.router.navigate(["/refresh"]);
        console.warn("Token Expiry time: ", this.tokenExpiryTime);
        console.warn("Date now: ", Date.now());

        // new Promise(()=> this.refresh(this.cookieService.get('refreshToken'))).then(this.location.back);
        this.refresh(this.cookieService.get('refreshToken'));
        this.location.back();
      }
    }
  }

  onSubmit(): void {

    if(this.loginForm.invalid){
      return; // TODO: send error notification
    }

    const username = this.loginForm.value['username'];
    const password = this.loginForm.value['password'];

    this.authService.requestTokens(username, password)
      .subscribe(
        data => {
          // this.tokens.accessToken = data['accessToken'];
          // this.tokens.refreshToken = data['refreshToken'];
          // this.cookieService.delete("accessToken");
          // this.cookieService.delete("refreshToken");

          // this.cookieService.set("accessToken", data['accessToken'], new Date(Number(data['tokenExpiryTime'])));
          this.cookieService.set("accessToken", data['accessToken'], new Date(Number(data['tokenExpiryTime'])), "/");
          this.cookieService.set("refreshToken", data['refreshToken'], undefined, "/");
          this.cookieService.set("tokenExpiryTime", data['tokenExpiryTime'], undefined, "/");

          console.warn("Token from data param : ", data['accessToken']);

          this.loginForm.reset(); // if login was successful then reset
          this.router.navigate(["/"])
          console.warn("Token from cookies : ", this.cookieService.get("accessToken"));
          // console.warn("Token expires at: ", new Date(Number(data['tokenExpiryTime']) + 3 * 24 * 60 * 60 * 1000));
        }
      )
  }


  refresh(refreshToken: string) {
    this.authService.refreshAccessToken(refreshToken)
      .subscribe(
        data => {
          this.cookieService.delete("accessToken");
          // this.cookieService.delete("refreshToken");

          // this.cookieService.set("accessToken", data['accessToken'], new Date(Number(data['tokenExpiryTime'])),"/");
          this.cookieService.set("accessToken", data['accessToken'], undefined, "/");

          this.cookieService.set("tokenExpiryTime", data['tokenExpiryTime'], undefined, "/");

          console.warn("Token expiry data: ", data['tokenExpiryTime']);
          console.warn("Token after refresh: ", this.cookieService.get("accessToken"));
        }
      )
  }

}
