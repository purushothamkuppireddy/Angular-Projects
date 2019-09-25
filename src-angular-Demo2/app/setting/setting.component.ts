import { Component, OnInit } from '@angular/core';
import { AddService } from '../add.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
result:any
  constructor(private svc:AddService) { }

  ngOnInit() {
    this.result=this.svc.getAns()
  }

}
