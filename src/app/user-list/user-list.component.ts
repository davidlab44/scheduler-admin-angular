import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
//export class UserListComponent implements OnInit {
export class UserListComponent {
  //users: User[] = [];

  constructor(private userService: UserService) {}

  login(username: string, password: string): void {
    this.userService.login(username, password).subscribe(
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
