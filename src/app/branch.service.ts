import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Branch } from './branches/branch.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BranchService {
  private apiUrlGet = environment.apiHost+'branches-by-company/3';
  private apiUrlPost = environment.apiHost+'branches';

  constructor(private http: HttpClient) {}

  getBranches(): Observable<Branch[]> {
    return this.http.get<Branch[]>(this.apiUrlGet);
  }

  postOneBranch(companies_id:string,internalName: string, name: string, email:string, phone:string): Observable<any> {
    const body = { companies_id:companies_id,departments_id:5,internal_name:internalName,name:name,email:email,phone:phone };
    return this.http.post<any>(this.apiUrlPost, body);
  }
  
}
