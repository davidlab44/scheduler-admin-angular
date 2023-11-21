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
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
  private apiUrl = 'http://localhost/scheduler-php/public/api/branches';
  name:string="";
  internal_name:string="";

  constructor(private userService: UserService,private branchService: BranchService, private http:HttpClient) {}

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

    create2(): void {
      this.createBranch().subscribe(
        (response) => {
          // Handle the response here
          console.log('Branch response:', response);
        },
        (error) => {
          // Handle errors
          console.error('Branch error:', error);
        }
      );
    }

    createBranch(): Observable<any> {
        const body = { companies_id:3, departments_id:5, internal_name:"NA", internal_code:0,name:"sanfdo2", email:"snf2@gm.com",phone:"301245", city_code:"CTG", location:"calle", isMain:0 };
        return this.http.post<any>(this.apiUrl, body);
    }

    logout(){
      localStorage.removeItem("valor");
      localStorage.removeItem("id");
      localStorage.removeItem("companies_id");
      window.location.reload();
    }

}
