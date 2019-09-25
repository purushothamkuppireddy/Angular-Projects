import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DetailsComponent } from './details/details.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { RegisterMerchantComponent } from './register-merchant/register-merchant.component';
import { AdminViewComponent } from './admin-view/admin-view.component';

const routes: Routes = [
  {path:"admin",component:AdminComponent},
  {path:"details",component:DetailsComponent},
  {path:"adminLogin",component:AdminloginComponent},
  {path:"registerMerchant",component:RegisterMerchantComponent},
  {path:"adminView",component:AdminViewComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
