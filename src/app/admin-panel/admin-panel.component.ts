// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import alertify from 'alertify.js';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  constructor(
    private router: Router,
    private http: HttpClient,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }
  onClick() {
    console.log('welcome to request');
    this.router.navigate(['/admin-panel/request']);

  }

  onLogoutClick() {
    this.authService.logOut();
    alertify.delay(3000);
    alertify.logPosition("bottom right");
    alertify.success('You are logged out');
  
    this.router.navigate(['/login']);
    return false;
 }
}
