import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrlGet = environment.apiHost+'clients-by-company/3';
  private apiUrl = environment.apiHost+'login';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrlGet);
  }

  login(username: string, password: string): Observable<any> {
    const body = { email: username, password: password };
    return this.http.post<any>(this.apiUrl, body);
  }
}
