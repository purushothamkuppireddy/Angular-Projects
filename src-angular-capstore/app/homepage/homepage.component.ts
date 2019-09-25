import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }
  adminbutton:boolean=true
  ngOnInit() {
  }
  clickme(){
return this.adminbutton=false
  }
  clickme2(){
    return this.adminbutton=true
      }
}
