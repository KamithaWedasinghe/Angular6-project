import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
     this.role = JSON.parse(localStorage.getItem('user'));
  }
  role
  logOut() {
    this.router.navigate(['/login']);
  }
  

}
