import { Component, OnInit } from '@angular/core';
import { CollegeService } from '../college.service';
import {College } from './College'

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.css']
})
export class CollegeComponent implements OnInit {
colleges:College[]=[];

  constructor(private svc:CollegeService) { }

  
  ngOnInit() {
    //calling client method in collegeService
    this.svc.client().subscribe(
      (response) => {
        console.log(response)
        this.colleges = response;
        console.log(this.colleges);
      },
      (error) => { console.log("Not responding") }
    )
  }

//Deleting Particular Row
  deleteCollege(i: number) {
    this.colleges.splice(i, 1)
  }



//Sorting the perticular column 
  sor(i: any) {
    console.log(i)
    switch (i) {
      case 1:   // Ascending order for collegeId 
        this.colleges.sort( (obj1, obj2)=> obj1.collegeId - obj2.collegeId
         
          
        );
        break;
      
        case 2: // Assending order for CollegeName 
        this.colleges.sort(function (a, b) {
          var A = a.collegeName.toUpperCase(); // ignore upper and lowercase
          var B = b.collegeName.toUpperCase(); // ignore upper and lowercase
          if (A < B) {
            return -1;
          }
          if (A > B) {
            return 1;
          }
          // returns 0 if names are equal
          return 0;
        });
        break;

        case 3:  // Obtaining  assending order for state
          this.colleges.sort(function (a, b) {
          var A = a.state.toUpperCase(); // ignore upper and lowercase
          var B = b.state.toUpperCase(); // ignore upper and lowercase
          if (A < B) {
            return -1;
          }
          if (A > B) {
            return 1;
          }
          // names must be equal
          return 0;
        });
        break;


      case 4: // obtaining assending order for college Fee
      this.colleges.sort( (obj1, obj2)=> obj1.collegeFee - obj2.collegeFee);
        break;
      
      
  
    }
  
  }
  
}
