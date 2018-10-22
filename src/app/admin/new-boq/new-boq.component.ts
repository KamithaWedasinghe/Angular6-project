import { ViewDetailService } from './view-detail.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-new-boq',
  templateUrl: './new-boq.component.html',
  styleUrls: ['./new-boq.component.css']
})
export class NewBOQComponent implements OnInit {
  list: any = [];


  constructor(
    private viewDetailService: ViewDetailService
  ) { }

  ngOnInit() {
    this.list = this.data['data']['0']['dataList']
  }


  public data = this.viewDetailService.data;


  selectSheet(name){
   this.data['data'].forEach(element => {
      if (element.sheetName === name) {
        this.list = element['dataList'];
      }
    });
  }
}

