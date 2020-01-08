import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //constructor(private router: Router, private http: Http) { }


  ngOnInit() {
    console.log('login Component Running...');
  }

  loginUser(){

  }
}