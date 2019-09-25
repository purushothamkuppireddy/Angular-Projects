import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


class Mobile{
  mobId:number
  mobName:string
  mobPrice:number
  }
  
@Injectable({
  providedIn: 'root'
})
export class MobileService {
  url: string = "../assets/mobile.json"
  constructor(private httpClient:HttpClient) {}
client(){
 return this.httpClient.get<Mobile[]>(this.url)
}



}
