import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ProjectsService {

  constructor(private http: HttpClient) { }

  public getAllProjects(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/projects');
  }

  public getProjectById(projectId: number): Observable<any> {
    return this.http.get<any[]>(`http://localhost:3000/projects/${projectId}`);
  }

  public createProject(project: any): Observable<any> {
    return this.http.post<any>(`http://localhost:3000/projects`, project);
  }

  public updateProjectById(projectId: number, projectUpdates: any): Observable<any> {
    return this.http.put<any>(`http://localhost:3000/projects/${projectId}`, projectUpdates);
  }

}
