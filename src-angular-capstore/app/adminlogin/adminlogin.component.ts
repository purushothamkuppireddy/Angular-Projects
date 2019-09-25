import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  
  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      userId: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  get f() { return this.registerForm.controls; }

  login() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    // alert(JSON.stringify(this.registerForm.value))
   if(this.registerForm.value.userId==="admin"&&this.registerForm.value.password==="password")
   {
    this.router.navigate(['/adminView'])
   }
   else{
     alert("Invalid UserId & Password")
   }
}
}