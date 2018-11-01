import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-view-contrct-boq',
  templateUrl: './view-contrct-boq.component.html',
  styleUrls: ['./view-contrct-boq.component.css']
})
export class ViewContrctBOQComponent implements OnInit {
  contractBOQListTable: any;

  constructor( private http: HttpClient) { }

  ngOnInit() {
    this.showContractBOQ()
  }

  public contractBOQList = [];

  viewContractBOQDetails: boolean = false;

  showContractBOQ() {

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    this.http.get("http://localhost:3000/contract/list/contractBoq", httpOptions).subscribe(
      (data) => {
        console.log(data);

        this.contractBOQList = data['contractBoq'];
       

      });

    this.viewContractBOQDetails=true;
  }

  viewContrctBoqFile(selectListItems){
    console.log(selectListItems);
    this.contractBOQListTable = selectListItems;
    this.viewContractBOQDetails=false;
  }
}
