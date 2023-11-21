import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { LoginService } from '../login.service';
import { LoginResponse } from '../login-response.interface';
import { CommonModule } from '@angular/common';  
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule,CommonModule,MatButtonModule]
})
export class LoginComponent implements OnInit{

  //users: User[] = [];
  //loginvisibility=true;
  constructor(private loginService: LoginService) {}

  ngOnInit(): void { 
    /*
    if(localStorage.hasOwnProperty('valor')){
      this.loginvisibility=false;
    }
    */
  }

  login(username: string, password: string): void {
    this.loginService.login(username, password).subscribe(
      (response:LoginResponse) => {
        // Handle the response here
        console.log('Login response:', response);
        console.log('Id User:', response.user.id);
        if(response.token.length>5){
            localStorage.setItem("valor",response.token)
            //localStorage.setItem("id",response.user.id)
            localStorage.setItem("id",response.user.id.toString())
            localStorage.setItem("companies_id",response.user.company_id.toString())
            //localStorage.setItem("id",response.)
            window.location.reload();
        }else{
          localStorage.removeItem("valor");
          localStorage.removeItem("id");
          localStorage.removeItem("companies_id");
        }
      },
      (error) => {
        // Handle errors
        console.error('Login error:', error);
      }
    );
  }

    username : string ="facturaelectronicaintouch@gmail.com";
    password : string ="123456";
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
