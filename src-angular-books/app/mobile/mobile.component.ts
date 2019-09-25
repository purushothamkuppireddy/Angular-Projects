import { Component, OnInit } from '@angular/core';
import { MobileService } from '../mobile.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

class Mobile{
mobId:number
mobName:string
mobPrice:number

constructor(mobId:number,mobName:string,mobPrice:number){
  this.mobId=mobId;
  this.mobName=mobName
  this.mobPrice=mobPrice
}
}

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {
mobiles:Mobile[];
isUpdate:boolean=false
index:number
mobile:Mobile
submitted:boolean=false;

form=new FormGroup({
  id:new FormControl('',[Validators.required,Validators.minLength(3)]),
  name:new FormControl('',Validators.required),
  price:new FormControl('',Validators.required)
 
  })

  constructor(private svc:MobileService) { }

  ngOnInit() {
    this.svc.client().subscribe(
      (response)=>{
        console.log(response)
        this.mobiles=response
      console.log(this.mobiles)
      },
      (error)=>{
        console.log("Not Responding")
      }
    )
  }
deleteMobile(i:number){
  this.mobiles.splice(i, 1)
}

updateMobile(i:number){
  this.isUpdate=true
  this.index=i
this.mobile=this.mobiles[i]
}

updateMobile2(value:any){
  this.isUpdate=false
    this.mobiles.splice(this.index,1,new Mobile(this.mobile.mobId, value.Name, value.Price ))
}


addMobile() {
  this.submitted=true
  // if (this.form.invalid) {
  //   return;

  this.mobiles.push(new Mobile(this.form.value.id,this.form.value.name,this.form.value.price))
}


sor(i: any) {
  console.log(i)
  switch (i) {
    case 1:
      this.mobiles.sort(function (obj1, obj2) {
        // Ascending: first age less than the previous
        return obj1.mobId - obj2.mobId;
      });
      break;
    case 2:
      this.mobiles.sort(function (a, b) {
        var nameA = a.mobName.toUpperCase(); // ignore upper and lowercase
        var nameB = b.mobName.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      });
      break;
    case 3:
      this.mobiles.sort(function (obj1, obj2) {
        // Ascending: first age less than the previous
        return obj1.mobPrice - obj2.mobPrice;
      });
      break;
    

  }


 }

}
