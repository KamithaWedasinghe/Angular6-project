import { Router } from '@angular/router';
import { ViewDetailService } from './../admin/new-boq/view-detail.service';

import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpHeaders } from '@angular/common/http';
import { Subscriber } from 'rxjs/internal/Subscriber';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Params } from '@angular/router';
// import { ViewDetailService } from 'src/app/admin/new-boq/view-detail.service';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {
  answer: any[] = [];
  data: any;
  list: any;
  stageName: any;
  projectList: any;
  projectType: any;
  prjectArea: any;
  projectName: any;
  stageNames: any;

  viewBOQDetails: boolean = false;

  constructor(
    private http: HttpClient,
    private modalService: NgbModal,
    private viewDetailService: ViewDetailService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getStage();
    this.showBOQ();
  }

  open(content) {
    this.modalService.open(content);
    // this.getAreas();
  }

  getStage() {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    this.http.get("http://localhost:3000/stage", httpOptions).subscribe(
      (data) => {
        console.log(data, "data stage");
        this.stageNames = data['stage'];
        console.log(this.stageNames)
      });
  }

  getStageName(stageName) {
    console.log(stageName);
    this.projectName = stageName;

    let obj3: projectStageSort = {
      projectName: this.projectName
    }
    console.log(obj3);

    // let httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json'
    //   })
    // }

    // this.http.post("http://localhost:3000/project/sort", obj3, httpOptions).subscribe(
    //   (data) => {
    //     console.log(data);
    //     this.projectList = data['result'];

    //   });
  }

  getAreaName(areaName) {
    console.log(areaName);
    this.prjectArea = areaName;

    let obj3: projectAreaSort = {
      projectName: this.projectName,
      prjectArea: this.prjectArea

    }
    console.log(obj3);

    // let httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json'
    //   })
    // }

    // this.http.post("http://localhost:3000/project/sort", obj3, httpOptions).subscribe(
    //   (data) => {
    //     console.log(data);
    //     this.projectList = data['result'];

    //   });
  }

  getTypeName(type) {
    console.log(type);
    this.projectType = type;

    let obj: projectDetails = {
      projectName: this.projectName,
      projectArea: this.prjectArea,
      projectType: this.projectType
    }
    console.log(obj)
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    this.http.post("http://localhost:3000/project/sort", obj, httpOptions).subscribe(
      (data) => {
        console.log(data);
        this.projectList = data['result'];

      });
  }



  showBOQ() {

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    this.http.get("http://localhost:3000/project/list", httpOptions).subscribe(
      (data) => {
        console.log(data);

        this.projectList = data['project'];

      });

    this.viewBOQDetails = false;
  }

  viewBoqFile(boqFile) {
    let obj: boqFileName = {
      boqName: boqFile
    }

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    console.log(obj)
    this.http.post("http://localhost:3000/view", obj, httpOptions).subscribe(
      (data) => {
        console.log(data);
        this.viewDetailService.data = data;
        // this.router.navigateByUrl("/home/new-boq");
        this.data = this.viewDetailService.data;
        this.list = this.data['data']['0']['dataList'];
      });
    this.viewBOQDetails = true;
  }

  selectSheet(name) {
    this.data['data'].forEach(element => {
      if (element.sheetName === name) {
        this.list = element['dataList'];
      }
    });
  }

  backToPrevious() {
    this.viewBOQDetails = false;
  }

  clear() {
    this.list.forEach((item) => {
      item.checked = false;
    })
  }

  change(event, dat) {

    if (event.target.checked) {
      // console.log(event, dat);
      this.answer.push(dat);
      // console.log("answer[]");

    }
  }
  submit() {
    // console.log(this.answer)
  }

  supplierSelection(selectItems) {
    // console.log(selectItems.value);
    // console.log(this.answer);


    let obj: selectList1 = {
      boqNo : selectItems.value.boqNo,
      boqRef :selectItems.value.boqRef,
      discription :selectItems.value.discription,
      engineerName:selectItems.value.engineerName,
      selectListItems : this.answer
      
    }
    console.log(obj);
    

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    this.http.post("http://localhost:3000/contract/add", obj, httpOptions).subscribe(
      (data) => {
        console.log(data, "gnfhfhg");
        
      });


  }





}

export interface projectStageSort {
  projectName: String;
}

export interface projectAreaSort {
  projectName: String;
  prjectArea: String;
}

export interface projectDetails {
  projectName: String;
  projectArea: String;
  projectType: String;
}

export interface addNewProject {
  stageName: String;
}

export interface boqFileName {
  boqName: String;
}

export interface selectList1 {
  boqNo: String;
  boqRef:String;
  discription:String;
  engineerName: String;
  selectListItems : Array<object>
}


