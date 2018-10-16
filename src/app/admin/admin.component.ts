import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpHeaders } from '@angular/common/http';
import { Subscriber } from 'rxjs/internal/Subscriber';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  stageNames: any;
  stageName: any;
  areas: any;
  areaName: any;


  constructor(private router: Router,
    config: NgbModalConfig,
    private http: HttpClient,
    private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {
    this.showBOQ();
    this.getStage()

  }

  viewSummary: boolean = false;

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
      uploadFile: this.file,

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

  projectList = [];


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

    this.viewSummary = false;
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

  showSummary() {
    this.viewSummary = true;
  }



  prjectArea;
  projectType;
  projectName;

  getStageName(stageName){
    console.log(stageName);
  }

  getAreaName(areaName) {
    console.log(areaName);
    this.prjectArea = areaName;
  }

  getTypeName(type) {
    console.log(type);
    this.projectType = type;

    let obj: projectDetails = {
      projectName: this.stageName,
      projectArea: this.areaName,
      ProjectType: this.projectType
    }
console.log(obj)
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    // this.http.post("http://localhost:3000/", obj, httpOptions).subscribe(
    //   (data) => {

    //   });
  }

  // getProjectName(projectN) {
  //   console.log(projectN);
  //   this.projectName = projectN;
  // }


  logOut() {
    this.router.navigate(['/login']);
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

    this.http.post("http://localhost:3000/project/stage", obj, httpOptions).subscribe(
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
    this.http.get("http://localhost:3000/project/stage", httpOptions).subscribe(
      (data) => {
        console.log(data, "data");
         this.stageNames = data['stage'];
         console.log(this.stageNames)
      }
    )
  }

}



export interface uploadModel {

  stageName: String;
  areaName: String;
  type: String;
  uploadFile: File;

}

export interface projectDetails {
  projectName: String;
  projectArea: String;
  ProjectType: String;
}

export interface addArea {
  areaName: String;
}

export interface addNewProject {
  stageName: String;
}

