import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

class Merchant {
  merchantId: number
  merchantName: String
  merchantEmail: String
  merchantContactNumber: number
  merchantPassword: String
  approvalStatus: String

  constructor(merchantId:number,merchantName:String,merchantEmail:String,merchantContactNumber:number,merchantPassword:String,approvalStatus:String){
    this.merchantId=merchantId
    this.merchantName=merchantName
    this.merchantEmail=merchantEmail
    this.merchantContactNumber=merchantContactNumber
    this.merchantPassword=merchantPassword
    this.approvalStatus=approvalStatus
  }

}
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})


export class AdminComponent implements OnInit {
  private baseUrl: string = "http://localhost:7620";
  private headers = new HttpHeaders({ 'Content-type': 'application/json' });
  private options = { headers: this.headers }

  merchants: Merchant[] = []
  merchant:Merchant
  constructor(private httpClient: HttpClient,private router: Router) { }

  ngOnInit() {
    this.httpClient.get<Merchant[]>(this.baseUrl + '/getAll', this.options).subscribe(
      (response) => {
        console.log(response)
        this.merchants = response
      },

      // (error) => {
      //   console.log(error)
      //   alert("Failed to fetch details");
      // }
      );
  }
  approveMerchant(i: number) {
    
    this.merchant=this.merchants[i]
    this.merchants.splice(i, 1)
    this.router.navigate(['/admin'])
    this.httpClient.post<Merchant[]>(this.baseUrl + '/changeStatus', this.merchant.merchantId, this.options).subscribe(
  
      (response:any) => {
        console.log(response)
        this.merchant=response
        this.merchants.push(new Merchant(this.merchant.merchantId,this.merchant.merchantName,this.merchant.merchantEmail,this.merchant.merchantContactNumber,
          this.merchant.merchantPassword,this.merchant.approvalStatus));
      })
      
   
      // (error) => {
      //   console.log(error)
      //   alert("Failed to change status");
      // }
    
   
  }

  deleteMerchant(i: number) {
  
    this.merchant=this.merchants[i]
    this.merchants.splice(i, 1)
    this.httpClient.post<Merchant[]>(this.baseUrl + '/remove',  this.merchant.merchantId, this.options).subscribe();
      // (response) => {
      //   // console.log(response)
      // },
      // (error) => {
      //   console.log(error)
      //   alert("Failed to remove");
      // }    
}

clickfun(i: number)
    {
      this.merchant=this.merchants[i]
      if(this.merchant.approvalStatus==="Active"){
        return true
      }

    }
  }
 




