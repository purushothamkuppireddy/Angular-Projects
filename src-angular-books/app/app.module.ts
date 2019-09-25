import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule,ReactiveFormsModule}from'@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudComponent } from './crud/crud.component';
//  import { from } from 'rxjs';
import { CrudService } from './crud.service';
import { MobileComponent } from './mobile/mobile.component';
import { MobileService } from './mobile.service';

@NgModule({
  declarations: [
    AppComponent,
    CrudComponent,
    MobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CrudService,
    MobileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
