import { ValidateService } from './../services/validate.service';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import alertify from 'alertify.js';
import { timeout } from 'rxjs/internal/operators/timeout';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // InputType: String;
  InputName: String;
  InputEmail: String;
  InputPassword: String;
  confirmPassword: String;
  type: string;

  constructor(
    private router: Router,
    private http: HttpClient,
    private validateService: ValidateService,
    private authService: AuthService) { }

  ngOnInit() {
  }
  message;
  showOrganizationFeild=false;

  showOrganization(select){
      console.log(select.value);
      if (select.value === "supplier") {
        this.showOrganizationFeild = true;
      } else {
        this.showOrganizationFeild = false;
      }
  }
  registerUser(form) {


    console.log(form.value);
    let obj: RegisterModel = {
      // type: form.value.InputType,
      name: form.value.InputName,
      email: form.value.InputEmail,
      password: form.value.InputPassword,
      role: form.value.type,
      organization: form.value.InputOrganization ? form.value.InputOrganization : " "
    }
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        "x-access-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imthc3VuQGdtYWlsLmNvbSIsIl9pZCI6IjViOTIzNjc5YmRjZmVmMDhhNGU4YzVmNSIsImlhdCI6MTUzNjkwNjk1NCwiZXhwIjoxNTM2OTEwNTU0fQ.DKydlMxDWu8htiUShspkzPcHpdNLWzhfkfeTb_9qB6k"
      })
    }

    if (form.value.type === "admin") {
      obj.role = 1;
      this.http.post("http://localhost:3000/user/register", obj).subscribe(
        (data) => {
          console.log(data);

          if (data['sucess'] == "user is added successfully") {
            localStorage.setItem('id_token', data['token']);
            alertify.delay(3000);
            alertify.logPosition("bottom right");
            alertify.success('user is added successfully');
            timeout(3000)
            this.router.navigate(['/login']);
          }

        }
      );
    } else {
      obj.role = 2;
      this.http.post("http://localhost:3000/supplier/register", obj, httpOptions).subscribe(
        (data) => {
          console.log(data);

          if (data['sucess'] == "supplier is added successfully") {
            localStorage.setItem('id_token', data['token']);
            alertify.delay(3000);
            alertify.logPosition("bottom right");
            alertify.success('supplier is added successfully');
            timeout(3000)
            this.router.navigate(['/login']);
          }

        }
      );
    }
    console.log(obj)



    /**Service calling video****/

    // if (!this.validateService.validateRegister(obj)) {
    //   console.log('kamith');
    //   return false;
    // }

    // if (!this.validateService.validateEmail(obj.email)) {
    //   console.log('kamitafgqrh');
    //   return false;
    // }

    // this.http.post("http://localhost:3000/register", obj).subscribe(
    //   (data) => {
    //     console.log(data['message']);
    //     this.message = data['message']
    //     if (data['message'] == "successfully added.") {
    //       alertify.delay(3000);
    //       alertify.logPosition("bottom right");
    //       alertify.success('Save Successfuly Registration')
    //       this.router.navigate(['/login']);
    //     }

    //     else {
    //       alertify.delay(3000);
    //       alertify.logPosition("bottom right");
    //       alertify.error('Registration Not Succesfuly')
    //       let redirect = '/login';
    //       this.router.navigate([redirect]);

    //     }
    //   }
    // );



    //console.log(InputType, InputName, InputEmail, InputPassword, confirmPassword);
    // return false;

    //authservice 
    // this.authService.registerUser(obj).subscribe(data => {
    //   if (data.success) {
    //     this.authService.storeUserData(data.token, data.user);
    //     alertify.delay(3000);
    //     alertify.logPosition("bottom right");
    //     alertify.success('Successfuly registered In')
    //     this.router.navigate(['/login']);
    //   } else {
    //     alertify.delay(3000);
    //     alertify.logPosition("bottom right");
    //     alertify.success('Cannot registered in')
    //     this.router.navigate(['/login']);
    //   }
    // });
  }

}

export interface RegisterModel {
  // type: String;
  name: String;
  email: String;
  password: String;
  role: number;
  organization: String
}
