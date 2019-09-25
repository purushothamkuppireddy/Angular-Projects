import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

class Books {
  id: number
  title: string
  year: number
  author: string
}


@Injectable({
  providedIn: 'root'
})
export class CrudService {
  url: string = "../assets/booklist.json"
  
  constructor(private httpClient:HttpClient) { 

  }
  client(){
   return this.httpClient.get<Books[]>(this.url)
  }
}
