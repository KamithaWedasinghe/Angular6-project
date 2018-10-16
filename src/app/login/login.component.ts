import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    config: NgbModalConfig,
    private http:HttpClient,
    private modalService: NgbModal) 
    {
    config.backdrop = 'static';
    config.keyboard = false;
    
  }

  open(content) {
    this.modalService.open(content);
  }

  ngOnInit() {
  }

  //to clear input fields
  user: string = '';
  username: string = '';
  password: string = '';

  clear() {
    this.username = null;
    this.password = null;
    this.user = null;
  }

  clickToRegisterMobitel() {
    console.log('welcome to test');
    this.router.navigate(['/register']);

  }

  clickToRegisterContractor() {
    console.log('welcome to test');
    this.router.navigate(['/register-contrctor']);

  }

  loginUser(form) {
    console.log(form.value);
    let obj1: loginModel = {
      user: form.value.user,
      email: form.value.username,
      password: form.value.password,
    }
    console.log(obj1);

    let httpOptions = {
      headers : new HttpHeaders({
        'Content-Type':'application/json'
      })
    }

    this.http.post("http://localhost:3000/user/login", obj1,httpOptions).subscribe(
      (data) => {
        console.log(data);
        if (data['result'] === 1 ) {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/supplier']);
        }
        this.clear();
      });
  }



  // selectUser(form){
  //   console.log();
  //   if (form.value.user === "supplier") {
  //     this.router.navigate(['/supplier']);
  //   } else {
  //     this.router.navigate(['/admin']);
  //   }
  // }
}


export interface loginModel {

  email: String;
  user: String;
  password: String;
}

