import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-create-new-formation-support',
  templateUrl: './create-new-formation-support.component.html',
  styleUrls: ['./create-new-formation-support.component.css']
})

export class CreateNewFormationSupportComponent implements OnInit {
 




  constructor(public _shared:SharedService,private router:Router,private http: HttpClient) { }





  file:any;
  selectFile(e:any){
    this.file=e.target.files[0];
    console.log(this.file);
 }
  ajout(){
    let formData =new FormData()
    formData.append('file',this.file)
    this._shared.UploadDrive(formData)
    .subscribe(
      res=>{
        console.log(res);
    
      },
      err=>{
      
        console.log(err)
      }
      )
  }
  




    

   ngOnInit(): void {

   

  }

}
