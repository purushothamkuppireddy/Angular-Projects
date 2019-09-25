import { Component, OnInit, Input } from '@angular/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { User } from './User.model';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
user:any
// @Input('name') userName:String
// @Input("title") userTitle:String
@Input('userobj2') userobj:User;
isCollapsed:boolean=true;

  constructor() {
   
   }
   toggleCollapse(){
     this.isCollapsed=!this.isCollapsed;
   }

  // ngOnInit() {
  //   this.user={
  //     name:this.userName,
  //     title:this.userTitle,
  //     address:"Hyderabad",
  //     phone:[9494709021,8978878864]};
 
  // }

  ngOnInit()
  {
    this.user={
          name:this.userobj.name,
          title:this.userobj.title,
          address:this.userobj.address,
          phone:this.userobj.phone
        };

    
  }

}
