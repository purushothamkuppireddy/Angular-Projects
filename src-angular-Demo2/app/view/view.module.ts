import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewcComponent } from './viewc/viewc.component';
import { TestService } from '../test.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ViewcComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports:[
    ViewcComponent
  ], 
  providers: [
    TestService
  ],

})
export class ViewModule { }
