import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpResponse, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
class Merchant {
  merchantId: number
  merchantName: String
  merchantEmail: String
  merchantContactNumber: number
  merchantPassword: String
  approvalStatus: String

}

@Component({
  selector: 'app-register-merchant',
  templateUrl: './register-merchant.component.html',
  styleUrls: ['./register-merchant.component.css']
})
export class RegisterMerchantComponent implements OnInit {

 merchant:Merchant
  private baseUrl: string = "http://localhost:7620";
  private headers = new HttpHeaders({ 'Content-type': 'application/json' });
  private options = { headers: this.headers }

  registerForm=new FormGroup({
    merchantName:new FormControl('',Validators.required),
    merchantEmail:new FormControl('',[Validators.required,Validators.email]),
    merchantPassword:new FormControl('',[Validators.required,Validators.minLength(6)]),
    merchantContactNumber:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),

  })
  
  constructor(private httpClient:HttpClient,private router: Router) { }

  ngOnInit() {
  }
register(){

  // alert(JSON.stringify(this.registerForm.value))

    this.httpClient.post(this.baseUrl + '/addByAdmin', JSON.stringify(this.registerForm.value), this.options).subscribe(
      (response:any) => {
        this.merchant=response
        console.log(response)
        if(this.merchant!=null){
      // alert("Registration Successfull!!!!! your merchantId is: "+this.merchant.merchantId);
      this.router.navigate(['/details'])}
      else{
        alert("EmailId is already registered!!!!!!");
      }
    },

    (error) => { 
      console.log(error)
      alert("Something went wrong!!!!!!  Plz register again");
      
   });
}

}
