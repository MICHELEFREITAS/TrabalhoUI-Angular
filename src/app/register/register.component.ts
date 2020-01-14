import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  // constructor(private router: Router, private http: Http) { }


  ngOnInit() {
    console.log('Register Component Running...');
  }



}
