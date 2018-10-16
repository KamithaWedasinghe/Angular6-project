import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';






@Component({
  selector: 'app-register-contrctor',
  templateUrl: './register-contrctor.component.html',
  styleUrls: ['./register-contrctor.component.css']
})
export class RegisterContrctorComponent implements OnInit {

  constructor(private router: Router,
    private http: HttpClient) { }

  ngOnInit() {
  }

  //to clear input fields 
  firstname: string = '';
  lastname: string = '';
  email: string = '';
  mobile: string = '';
  password: string = '';
  confirmpassword: string = '';

  passwordMatch: boolean = false;

  back() {
    this.router.navigate(['/login']);
  }

  registerUser(form) {
    console.log(form.value);

    let obj: registerModel = {
      role: 2,
      firstname: form.value.firstname,
      lastname: form.value.lastname,
      email: form.value.email,
      mobile: form.value.mobile,
      password: form.value.password,

    }
    console.log(obj);
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    this.http.post("http://localhost:3000/user/register", obj, httpOptions).subscribe(
      (data) => {
        console.log(data);

        if (data['sucess'] == "user is added successfully") {


          this.router.navigate(['/login']);
        } else {

        }
      });
  }
  onKeyUp(event: any) {
    if (this.password.length == 8) {
      if (this.confirmpassword == this.password) {
        console.log("jgjyguyg");
        this.passwordMatch = true;
      }

      else {
        this.passwordMatch = false;
      }
    }
  };


}
export interface registerModel {
  role: number;
  firstname: String;
  lastname: String;
  email: String;
  mobile: String;
  password: String;

}
