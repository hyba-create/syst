import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user={
    UserName: '',
    Familyname:'',
    Birthday:'',
    E_Mail:'',
    password:'',
    confirme_password:''
  }
  
  constructor(public _shared:SharedService ,private router:Router) { };

  ajout(){
    this._shared.CreatNewUser(this.user)
    .subscribe(
      res=>{
        console.log(res);
        this.router.navigate(["/Login"]);
      },
      err=>{
        window.alert("PLS complete Form"),
        console.log(err)
      }
      )
  }



  ngOnInit() {
    
    
  }
  

}
