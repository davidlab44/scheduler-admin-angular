import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //private apiUrl = 'https://starappstechnologies.com/fel/auth/public/api/clients-by-company/3'; // Replace with your actual API endpoint
  //private apiUrl = 'http://localhost/fel/auth/public/api/login?email=facturaelectronicaintouch@gmail.com&password=123456';
  private apiUrlGet = 'http://localhost/scheduler-php/public/api/clients-by-company/3';
  private apiUrl = 'http://localhost/fel/auth/public/api/login';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrlGet);
  }

  login(username: string, password: string): Observable<any> {

    const body = { email: username, password: password };
    
    return this.http.post<any>(this.apiUrl, body);
  }
}
