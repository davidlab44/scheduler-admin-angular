import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Branch } from './branches/branch.interface';

@Injectable({
  providedIn: 'root'
})
export class BranchService {
  //private apiUrl = 'https://starappstechnologies.com/fel/auth/public/api/clients-by-company/3'; // Replace with your actual API endpoint
  //private apiUrl = 'http://localhost/fel/auth/public/api/login?email=facturaelectronicaintouch@gmail.com&password=123456';
  private apiUrlGet = 'http://localhost/scheduler-php/public/api/branches-by-company/3';
  private apiUrlPost = 'http://localhost/scheduler-php/public/api/branches';

  constructor(private http: HttpClient) {}

  getBranches(): Observable<Branch[]> {
    return this.http.get<Branch[]>(this.apiUrlGet);
  }

  postOneBranch(companies_id:string,internalName: string, name: string, email:string, phone:string): Observable<any> {
    const body = { companies_id:companies_id,departments_id:5,internal_name:internalName,name:name,email:email,phone:phone };
    return this.http.post<any>(this.apiUrlPost, body);
  }
  
}
