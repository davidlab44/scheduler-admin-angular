import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://starappstechnologies.com/fel/auth/public/api/clients-by-company/3'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
}
