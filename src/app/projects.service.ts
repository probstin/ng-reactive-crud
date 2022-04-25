import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient) { }

  public getAllProjects(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/projects');
  }

  public getProjectById(projectId: number): Observable<any> {
    return this.http.get<any[]>(`http://localhost:3000/projects/${projectId}`);
  }

}
