import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onClick(name) {
    console.log(name.id);
    this.router.navigate(['/admin-panel/'+ name.id]);

  }
}
