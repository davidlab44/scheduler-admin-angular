import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { LoginService } from '../login.service';
import { LoginResponse } from '../login-response.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule]
})
export class LoginComponent {

  //users: User[] = [];

  constructor(private loginService: LoginService) {}

  login(username: string, password: string): void {
    this.loginService.login(username, password).subscribe(
      (response) => {
        // Handle the response here
        console.log('Login response:', response);
      },
      (error) => {
        // Handle errors
        console.error('Login error:', error);
      }
    );
  }

    username : string ="";
    password : string ="";
    show: boolean= false;
    submit(){
    console.log("user name is " + this.username)
    this.login(this.username,this.password)
    //this.clear();
    }
    /*
    clear(){
    this.username ="";
    this.password = "";
    this.show = true;
    }
    */
}






/*
import {Component} from '@angular/core';

@Component({
selector: 'login-demo',
styleUrls: ['demo.login.component.css'],
templateUrl: 'demo.login.component.html',
})
export class LoginFormDemo {
username : string ="";
password : string ="";
show: boolean= false;
submit(){
console.log("user name is " + this.username)
this.clear();
}
clear(){
this.username ="";
this.password = "";
this.show = true;
}
}
*/
