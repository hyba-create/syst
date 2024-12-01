import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent implements OnInit {

  membre={
    UserName: '',
    password:'',
    
  }
 
 
  registre(){
    this._shared.registre(this.membre)
    .subscribe(
      res=>{
        console.log(res);
        this.router.navigate(["/Home"]);
      },
      err=>{
        console.log(err)
        window.alert('UserName or password invalid !')
      }
      )
  }
 



  constructor(public _shared:SharedService,private router:Router) { }
 
  GoToSignUp(){
    this.router.navigate(['/Registre'])
  }
  ngOnInit(): void {
  }

}
