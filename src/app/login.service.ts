import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginResponse } from './login-response.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = environment.apiHost+'login';

  constructor(private http: HttpClient) {}

  /*
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
  */

  login(username: string, password: string): Observable<any> {
    const body = { email: username, password: password };
    return this.http.post<LoginResponse>(this.apiUrl, body);
  }
}
