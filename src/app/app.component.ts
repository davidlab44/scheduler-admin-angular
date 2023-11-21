import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { routes } from './app.routes';
import { CommonModule } from '@angular/common';  
import { OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { UserService } from './user.service';
import { BranchService } from './branch.service';
import { User } from './user.interface';
import { Branch } from './branches/branch.interface';

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
  branches: Branch[] = [];

  constructor(private userService: UserService,private branchService: BranchService) {}


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

    this.branchService.getBranches().subscribe(
      (data: Branch[]) => {
        this.branches = data;
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
