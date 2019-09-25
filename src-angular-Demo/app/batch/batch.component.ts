import { Component, OnInit } from '@angular/core';
import { Car } from './Car';

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.css']
})
export class BatchComponent implements OnInit {
message:String;

  constructor() { }

  ngOnInit() {
  }

  display(){
return " string Interpolation Hello"
  }
  path="https://vjit.ac.in/dss/images/vjitlogo.png"
  
  
  buttonEvent()
  {
   alert("purushotham reddy")
  }
  addition(num1,num2)
{
  alert(num1+num2)
}

  isloggedin:boolean=false
    colleges:Array<String>=["VJIT","CVSR","BVRIT"]
  cars:Array<Car>=
  [{name:"BMW",speed:200,color:"black"},
  {name:"Bugatti",speed:300,color:"red"}]
  todaydate = new Date();

}
