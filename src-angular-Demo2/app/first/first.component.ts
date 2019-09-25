import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  id:number;
  constructor(private activateRoute:ActivatedRoute) { }

  ngOnInit() {
    this.id=this.activateRoute.snapshot.params["id"]
  }

}
