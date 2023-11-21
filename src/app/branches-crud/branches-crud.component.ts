import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { LoginService } from '../login.service';

import { CommonModule } from '@angular/common';  
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import * as WebFont from 'webfontloader';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

//import { CommonModule } from '@angular/common';  
//grid responsive
import { FlexLayoutModule } from '@angular/flex-layout';







@Component({
  selector: 'app-branches-crud',
  templateUrl: './branches-crud.component.html',
  styleUrls: ['./branches-crud.component.scss'],
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule,CommonModule,FlexLayoutModule,MatSlideToggleModule,
    HttpClientModule,BrowserAnimationsModule,MatButtonModule,MatToolbarModule,MatMenuModule,MatSnackBarModule,
    MatTabsModule]
})
export class BranchesCrudComponent implements OnInit{

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
      (response) => {
        // Handle the response here
        console.log('Login response:', response);
        if(response.token.length>5){
            localStorage.setItem("valor",response.token)
        }else{
          localStorage.removeItem("valor");
        }
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

