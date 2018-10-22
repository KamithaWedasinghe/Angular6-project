import { Component, OnInit } from '@angular/core';
import { FileSelectDirective, FileUploader } from 'ng2-file-upload';

const uri = 'http://localhost:3000/upload';

@Component({
  selector: 'app-boq-list',
  templateUrl: './boq-list.component.html',
  styleUrls: ['./boq-list.component.css']
})
export class BoqListComponent implements OnInit {

  constructor() { 
    this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) =>{
      this.attachmentList.push(JSON.parse(response));
      
    }
  }

  ngOnInit() {
  }

  uploader:FileUploader = new FileUploader({url:uri});

  attachmentList:any = [];

}
