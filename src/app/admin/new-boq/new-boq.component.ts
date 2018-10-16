import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-new-boq',
  templateUrl: './new-boq.component.html',
  styleUrls: ['./new-boq.component.css']
})
export class NewBOQComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  createProject(form) {
    console.log(form.value);

    let obj1 : uploadModel = {
      
      projectName: form.value.projectName,
      area: form.value.area,
      type: form.value.type,
      uploadFile: this.file,

    }
    console.log(obj1);
    let httpOptions = {
      headers : new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
  
    this.http.post("http://localhost:3000/project/add", obj1,httpOptions).subscribe(
      (data) => {
        console.log(data);
  
        if (data['sucess'] == "user is added successfully")  {
  
        } else {
          
        }

      });
  

  }
  file : File;
  upload(event){
    this.file  = event.target.files[0];
  }

}
export interface uploadModel {
  
  projectName: String;
  area: String;
  type: String;
  uploadFile: File;
  
}
