import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http:HttpClient) { }
  private url='http://127.0.0.1:3000/';
  private url1='http://localhost:5500/';


  user:any[]=[];
  membre:any[]=[];
  files:any[]=[];

  CreatNewUser(user:any){
    return this.http.post(this.url+'user/register',user);
  }
  
  registre(membre:any){
    return this.http.post(this.url+'user/Login',membre);
  }

  UploadDrive(files:any){
    return this.http.post(this.url1+'fileUpload',files);
  }
}
