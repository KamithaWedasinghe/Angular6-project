import { Router } from '@angular/router';
import { ViewDetailService } from './view-detail.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-new-boq',
  templateUrl: './new-boq.component.html',
  styleUrls: ['./new-boq.component.css']
})
export class NewBOQComponent implements OnInit {
  list1: any;
  list: any = [];



  constructor(
    private viewDetailService: ViewDetailService,
    private router: Router
  ) { }

  ngOnInit() {
    this.data = this.viewDetailService.data;
    this.list = this.data['data']['0']['dataList'];
  }


  public data: any;


  selectSheet(name) {
    this.data['data'].forEach(element => {
      if (element.sheetName === name) {
        this.list = element['dataList'];
      }
    });
  }

  backToPrevious() {
    this.router.navigate(['home/admin']);
  }


  clear() {
    this.list.forEach((item) => {
      item.checked = false;
    })
  }

  submit(form){
    console.log(form);
  }



  // change(event,dat){
    
  //   if (event.target.checked) {
  //     console.log(event,dat);

  //   } 
  // }
}

