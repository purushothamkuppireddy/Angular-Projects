import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SettingComponent } from './setting/setting.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
{path:'home', component:HomeComponent},
{path:'setting', component:SettingComponent},
{path:"first/:id", component:FirstComponent},
{path:'second', component:SecondComponent},
{path:'first', component:FirstComponent},
// {path:'', redirectTo:"/home",pathMatch:"full"},
// {path:'**',component:HomeComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
