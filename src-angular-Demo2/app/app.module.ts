import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SettingComponent } from './setting/setting.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { AddService } from './add.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingComponent,
    FirstComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [AddService],
  bootstrap: [AppComponent]
})
export class AppModule { }
