import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  @ViewChild('fileInput') fileInput: ElementRef | undefined;
  uploadProgress: number | null = null;

  constructor(private dashboard:DashboardService) {}

  

  ngOnInit() {
  }



  onFileSelected(event:any){
   console.log(event)
  }

  uploadfile(){

  }
}
