import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { routes } from './app.routes';
import { CommonModule } from '@angular/common';  
import { OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { UserService } from './user.service';
import { User } from './user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  //imports: [FormsModule, MatFormFieldModule, MatInputModule,CommonModule]
})
export class AppComponent implements OnInit{
  public appRoutes = routes;
  loginvisibility=true;
  users: User[] = [];

  constructor(private userService: UserService) {}


  ngOnInit(): void { 
    if(localStorage.hasOwnProperty('valor')){
      this.loginvisibility=false;
    }

    this.userService.getUsers().subscribe(
      (data: User[]) => {
        this.users = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }


   //ngOnInit(): void {
    /*
    this.userService.getUsers().subscribe(
      (data: User[]) => {
        this.users = data;
      },
      (error) => {
        console.error(error);
      }
    );
    */
  //}
}
