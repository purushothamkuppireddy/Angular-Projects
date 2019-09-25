import { Component } from '@angular/core';
import { User } from './address/User.model';
import { TestService } from './test.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
userobj1:User
// constructor()
// {
// //  this.userobj1=new User();
// //  this.userobj1.name="purushotham",
// //  this.userobj1.title="Iprimed trainee",
// //  this.userobj1.address="MBNR",
// //  this.userobj1.phone=["9494709021","8978878864"]  //(or)
// this.userobj1={
//   name:"reddy",
//   title:"softwsre",
//   address:"mgl",
//   phone:["8645321","6845645"]};

// }


constructor( private svc:TestService,private http:HttpClient)
{
  
 this.svc.printToConsole("Got the Service! from outer app.component.ts")
}
ngOnInit(){
  let obs=this.http.get('https://api.github.com/users/purushothamkuppireddy');

  obs.subscribe(()=>console.log( 'outer http response'));
}

}








