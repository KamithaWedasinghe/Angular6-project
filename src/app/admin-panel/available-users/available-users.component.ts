import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import alertify from 'alertify.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-available-users',
  templateUrl: './available-users.component.html',
  styleUrls: ['./available-users.component.css']
})
export class AvailableUsersComponent implements OnInit {

  constructor(private http : HttpClient,
  private router : Router) { }

  ngOnInit() {
    this.getUsers();  }

  users : any[] = [] ;
  getUsers(){
    let token = localStorage.getItem("id_token") ;
    console.log('token');

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token' : token
      })
    }
      this.http.get("http://localhost:3000/user", httpOptions).subscribe(
        (data)=>{
          console.log(data,"data");
          this.users = data['users'];
        }
      )
  }

  deleteUser(user) {
    console.log(user);
    let obj = {
      _id: user._id
    }
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJ1bWVzaGFAZ21haWwuY29tIiwiX2lkIjoiNWI5MWZkNTIzNDhiZmE0MDZjNzUzNDc1IiwiaWF0IjoxNTM2MzA2MTk4LCJleHAiOjE1MzYzMDk3OTh9.z1ix11S3x227azF3GVJXGVIdZ-FvopFaHrGvwfo5OQ4"

      })
    }
    this.http.post("http://localhost:3000/user/delete", obj, httpOptions).subscribe((data) => {
      console.log(data);
      if (data['sucess'] == "user is deleted successfully") {
        localStorage.setItem('id_token', data['token']);
        alertify.delay(3000);
        alertify.logPosition("bottom right");
        alertify.success('user is deleted successfully')
        location.reload();
      }

    })

  }

}
