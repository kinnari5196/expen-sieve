import { Component, OnInit } from '@angular/core';
import './yeti'
import { NgForm } from '@angular/forms';
import { BackEndCalls } from '../services/backendcalls.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private service: BackEndCalls, private router: Router) { }

  ngOnInit() {
  }

  submit(form: NgForm) {
    let loginData = JSON.stringify(form.value);
    console.log(loginData);
    localStorage.setItem('businessId','1');
    localStorage.setItem('isLoggedIn','true');

    this.router.navigate(['/dashboard']);
    
    console.log(localStorage.getItem('isLoggedIn'));
    this.service.loginUser(loginData)
      .subscribe((data) => {
        console.log(data);
        localStorage.setItem('businessId','1');
        localStorage.setItem('isLoggedIn','true');
      });
  }
}
