import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Declaring College class
class College{
  collegeId:number
  collegeName:"String"
  state:"String"
  collegeFee:number
  
   }

@Injectable({
  providedIn: 'root'
})
export class CollegeService {

// assigning path of JSON file to url
  url="../assets/college.json"  

  constructor(private httpClient:HttpClient) { }
  
  client(){
    //Calling HttpClient to get the collage details in the form of college Array and return the array
    return this.httpClient.get<College[]>(this.url)
   }
}
