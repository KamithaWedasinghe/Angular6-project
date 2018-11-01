import { ViewDetailService } from './new-boq/view-detail.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpHeaders } from '@angular/common/http';
import { Subscriber } from 'rxjs/internal/Subscriber';
import { FileSelectDirective, FileUploader } from 'ng2-file-upload';

const uri = 'http://localhost:3000/upload';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  contractBOQList= [];

  // passData: Object;
  stageNames: any;
  stageName: any;
  areas: any;
  areaName: any;
  prjectArea;
  projectType;
  projectName;

  projectList = [];


  viewContractBOQ: boolean = false;


  constructor(private router: Router,
    config: NgbModalConfig,
    private http: HttpClient,
    private modalService: NgbModal,
    private viewDetailService: ViewDetailService) {
    config.backdrop = 'static';
    config.keyboard = false;
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      this.attachmentList.push(JSON.parse(response));

    }
  }

  ngOnInit() {
    this.showBOQ();
    this.getStage();
  }

  uploader: FileUploader = new FileUploader({ url: uri });

  attachmentList: any = [];

  onClick() {
    console.log("sdvwsd");
    this.router.navigate(['/admin/new-boq']);
  }



  open(content) {
    this.modalService.open(content);
    this.getAreas();
  }

  createProject(form) {
    console.log(form.value);

    let obj1: uploadModel = {

      stageName: form.value.stageName,
      areaName: form.value.areaName,
      type: form.value.type,
      boqFileName: form.value.boqFileName

    }
    console.log(obj1);
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    this.http.post("http://localhost:3000/project/add", obj1, httpOptions).subscribe(
      (data) => {
        console.log(data, "gnfhfhg");

        this.showBOQ();

      });
  }
  file: File;
  upload(event) {
    this.file = event.target.files[0];
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

    this.viewContractBOQ = false;
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
        this.router.navigateByUrl("/home/new-boq");
      });
  }

  deleteProject(id) {

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    this.http.delete(`http://localhost:3000/project/${id}`, httpOptions).subscribe(
      (data) => {
        console.log(data);
        this.showBOQ();
      }
    )

  }

  showContractBOQ() {
    this.viewContractBOQ = true;
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



  createArea(form) {
    console.log(form.value);

    let obj: addArea = {
      areaName: this.areaName
    }

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    this.http.post("http://localhost:3000/area", obj, httpOptions).subscribe(
      (data) => {
        console.log(data);
        this.getAreas();
      });
  }

  getAreas() {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    this.http.get("http://localhost:3000/area", httpOptions).subscribe(
      (data) => {
        console.log(data, "data");
        this.areas = data['area'];
      }
    )
  }

  createNewStage(form) {
    console.log(form.value);

    let obj: addNewProject = {
      stageName: this.stageName
    }

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    this.http.post("http://localhost:3000/stage", obj, httpOptions).subscribe(
      (data) => {
        console.log(data);
        this.getStage();
      });
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

}

export interface uploadModel {

  stageName: String;
  areaName: String;
  type: String;
  boqFileName: String;

}

export interface projectDetails {
  projectName: String;
  projectArea: String;
  projectType: String;
}

export interface addArea {
  areaName: String;
}

export interface addNewProject {
  stageName: String;
}

export interface projectStageSort {
  projectName: String;
}

export interface projectAreaSort {
  projectName: String;
  prjectArea: String;
}

export interface boqFileName {
  boqName: String;
}



