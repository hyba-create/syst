import { Component, ViewChild, ElementRef,OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  navbar: any;

  ngOnInit() {
    this.navbar = document.querySelector("#navbar");
    let prevScrollpos = window.pageYOffset;

    window.onscroll = () => {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        this.navbar.style.backgroundColor = "white";
      } else {
        this.navbar.style.backgroundColor = "black";
      }
      prevScrollpos = currentScrollPos;
    };
  }

}




  


