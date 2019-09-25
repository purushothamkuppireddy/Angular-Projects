import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterMerchantComponent } from './register-merchant/register-merchant.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { DetailsComponent } from './details/details.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminViewComponent } from './admin-view/admin-view.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterMerchantComponent,
    AdminComponent,
    AdminloginComponent,
    DetailsComponent,
    HomepageComponent,
    AdminViewComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
