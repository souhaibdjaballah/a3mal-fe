import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { User } from 'src/app/commons/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user!: User;

  signUpForm!: FormGroup;

  constructor(private http: HttpClient,
    private formBuilder: FormBuilder,
    private cookieService: CookieService,
    private userService: UserService) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required, Validators.minLength(8)],
      confirmPassword: ['', Validators.required, Validators.minLength(8)]
    });
  }

  onSubmit() {
    const headers = { "Authorization": "Bearer " + this.cookieService.get("accessToken") };

    // const formData = new FormData();
    // formData.append('username', this.signUpForm.value['username']);
    // formData.append('password', this.signUpForm.value['password']);

    const username = this.signUpForm.value['username'];
    const password = this.signUpForm.value['password'];
    const confirmPassword = this.signUpForm.value['confirmPassword'];

    this.user = { username, password } as User;

    if (password !== confirmPassword) {
      throw new Error("Passwords don't match");
    } else {
      this.userService.save(this.user).subscribe(
        data => this.user = data
      );
      console.warn("Registered user: ", this.user);
    }

  }

}
