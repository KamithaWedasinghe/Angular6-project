import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import alertify from 'alertify.js';
//import { HttpHeaders } from '@angular/common/http/src/headers';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private http: HttpClient,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }
  message1;
  // onClick() {
  //   console.log('welcome to test');
  //   this.router.navigate(['/admin-panel']);

  // }

  onClick2() {
    console.log('welcome to test');
    this.router.navigate(['/register']);

  }

 

  
  loginUser(form) {
    console.log(form.value);
    let obj1: loginModel = {

      email: form.value.username,
      password: form.value.password,
    }
    console.log(obj1);

    
    //first code
    let httpOptions = {
      headers : new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
    this.http.post("http://localhost:3000/user/login", obj1,httpOptions).subscribe(
      (data) => {
        console.log(data);
        this.message1 = data['message1']
        if (data['sucess'] == "successfully Login!") {
          localStorage.setItem('id_token', data['token']);
          alertify.delay(3000);
          alertify.logPosition("bottom right");
          alertify.success('Successfuly Loged In')
          this.router.navigate(['/admin-panel/request']);
        }

      }
    );




    return false;

    //video eke code eka
    // this.authService.authenticateUser(obj1).subscribe(data => {
    //   if (data.success) {
    //     this.authService.storeUserData(data.token, data.user);
    //     alertify.delay(3000);
    //     alertify.logPosition("bottom right");
    //     alertify.success('Successfuly Loged In')
    //     this.router.navigate(['/login']);
    //   } else {
    //     alertify.delay(3000);
    //     alertify.logPosition("bottom right");
    //     alertify.success('Cannot loged in')
    //     this.router.navigate(['/login']);
    //   }
    }
  }



export interface loginModel {

  email: String;

  password: String;
}
