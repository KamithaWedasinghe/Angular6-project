import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
// import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

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
  values = '';

  passwordMatch: boolean = false;

  // clear() {
  //   this.firstname = null;
  //   this.lastname = null;
  //   this.email = null;
  //   this.tp = null;
  //   this.password = null;
  //   this.confirmpassword = null;
  //   }

  back() {
    this.router.navigate(['/login']);
  }

  registerUser(form) {
    console.log(form.value);

    let obj1 : registerModel = {
      role: 1,
      firstname: form.value.firstname,
      lastname: form.value.lastname,
      email: form.value.email,
      mobile: form.value.mobile,
      password: form.value.password,

    }
    console.log(obj1);
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    this.http.post("http://localhost:3000/user/register", obj1, httpOptions).subscribe(
      (data) => {
        console.log(data);

        if (data['sucess'] == "user is added successfully") {


          this.router.navigate(['/login']);
        } else {
          this.router.navigate(['/login']);
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


