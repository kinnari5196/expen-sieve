import { Component, OnInit } from '@angular/core';
import './yeti'
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  business_name:string;
  password:string;
  constructor( private router: Router) { }

  ngOnInit() {
  }

  submit(form: NgForm) {
   // let loginData = JSON.stringify(form.value);
    //console.log(loginData);
    if(this.business_name=="st" && this.password=="kinnari")
    {
    localStorage.setItem('businessId','1');
    localStorage.setItem('isLoggedIn','true');


    this.router.navigate(['/dashboard']);
    }
    else{
      alert("Plz enter correct credentials");
    }
    
  }
}
