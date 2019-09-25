import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-viewc',
  templateUrl: './viewc.component.html',
  styleUrls: ['./viewc.component.css']
})
export class ViewcComponent implements OnInit {
  userName: String;
  response: any;
  constructor(private http: HttpClient) {

  }

  ngOnInit() { }
  search() {
    this.http.get('https://api.github.com/users/' + this.userName)
      .subscribe(
        (response) => {
          this.response = response;
          console.log(this.response)
        },

        (error) => { 
          console.log("Not Responding")
       }


      );
  }

}
