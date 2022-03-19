import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Tokens } from 'src/app/commons/tokens';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  tokens!: Tokens;
  

  loginForm = this.formBuilder.group({
    username: '',
    password: ''
  });

  constructor(private http: HttpClient,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private cookieService: CookieService) { }

  ngOnInit(): void {

  }

  onSubmit(): void {

    this.authService.requestTokens(this.loginForm.value['username'], this.loginForm.value['password'])
      .subscribe(
        data => {
          // this.tokens.accessToken = data['accessToken'];
          // this.tokens.refreshToken = data['refreshToken'];
          this.cookieService.set("accessToken", data['accessToken']);
          this.cookieService.set("refreshToken", data['refreshToken']);
        }
      )

    // console.warn('Tokens:', this.tokens);

    this.loginForm.reset();
  }

}
