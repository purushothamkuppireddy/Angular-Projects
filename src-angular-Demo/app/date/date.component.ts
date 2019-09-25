import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
message:String ;
somenumber:number=10;
  constructor() {
setInterval(()=>{var currDate=new Date();
  this.message= currDate.toDateString()+" "+ currDate.toLocaleTimeString();},1000  )

  }
  ngOnInit() {
  }


 addNumber(a,b)
 {
   return a+b;
 }


}