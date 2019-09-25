import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ViewModule } from './view/view.module';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { BatchComponent } from './batch/batch.component';
import { DateComponent } from './date/date.component';
import { AddressComponent } from './address/address.component';
import { TestService } from './test.service';
import { CustomPipe } from './custom.pipe';


@NgModule({
  declarations: [
    AppComponent,
    BatchComponent,
    DateComponent,
    AddressComponent,
    CustomPipe,
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ViewModule,
    HttpClientModule
  ],
  providers: [
    TestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
