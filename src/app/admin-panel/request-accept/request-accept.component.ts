import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import alertify from 'alertify.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-accept',
  templateUrl: './request-accept.component.html',
  styleUrls: ['./request-accept.component.css']
})
export class RequestAcceptComponent implements OnInit {

  constructor(private http: HttpClient,
    private router: Router) { }

  ngOnInit() {
    this.getSuppliers();
  }

  //getting suppliers
  suppliers: any[] = [];
  getSuppliers() {
    let token = localStorage.getItem("id_token");
    console.log('token');

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imthc3VuQGdtYWlsLmNvbSIsIl9pZCI6IjViOTIzNjc5YmRjZmVmMDhhNGU4YzVmNSIsImlhdCI6MTUzNjkwODc5MSwiZXhwIjoxNTM2OTEyMzkxfQ.M9qjG8tM23NxWUaqCBoPNZz8ZBFzejN99IHt9BqFOZ0'
      })
    }
    this.http.get("http://localhost:3000/supplier", httpOptions).subscribe(
      (data) => {
        console.log(data, "data");
        this.suppliers = data['suppliers'];
      }
    )
  }

  //accept suppliers request

  accept(supplier) {
    console.log(supplier);
    let obj = {
      _id: supplier._id
    }
    console.log(obj);
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJ1bWVzaGFAZ21haWwuY29tIiwiX2lkIjoiNWI5MWZkNTIzNDhiZmE0MDZjNzUzNDc1IiwiaWF0IjoxNTM2MzA2MTk4LCJleHAiOjE1MzYzMDk3OTh9.z1ix11S3x227azF3GVJXGVIdZ-FvopFaHrGvwfo5OQ4"

      })
    }
    this.http.post("http://localhost:3000/user/supplier/accept", obj, httpOptions).subscribe((data) => {
      console.log(data);

    })
  }

  reject(supplier) {
    console.log(supplier);
    let obj = {
      _id: supplier._id
    }
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJ1bWVzaGFAZ21haWwuY29tIiwiX2lkIjoiNWI5MWZkNTIzNDhiZmE0MDZjNzUzNDc1IiwiaWF0IjoxNTM2MzA2MTk4LCJleHAiOjE1MzYzMDk3OTh9.z1ix11S3x227azF3GVJXGVIdZ-FvopFaHrGvwfo5OQ4"

      })
    }
    this.http.post("http://localhost:3000/supplier/reject", obj, httpOptions).subscribe((data) => {
      console.log(data);
      if (data['sucess'] == "supplier is deleted successfully") {
        localStorage.setItem('id_token', data['token']);
        alertify.delay(3000);
        alertify.logPosition("bottom right");
        alertify.success('supplier is deleted successfully')
        location.reload();
      }

    })

  }


}
