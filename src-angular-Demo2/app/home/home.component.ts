import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddService } from '../add.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
num1:number;
num2:number;
  constructor(private router:Router, private svc:AddService) { }

  ngOnInit() {
  }
clickfun(){
  this.router.navigate(['/setting'])
}
addition(){
  this.svc.n1=this.num1;
  this.svc.n2=this.num2;

}
}
