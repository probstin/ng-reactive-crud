import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html'
})
export class ProjectCreateComponent {

  constructor(
    private _projectsService: ProjectsService,
    private router: Router
  ) { }

  // ==================
  // event handlers
  // ==================

  createProject(project: any): void {
    if (project) {
      this._projectsService
        .createProject(project)
        .subscribe({
          next: project => this.router.navigate(['/projects', project.id]),
          error: error => console.error(error)
        });
    }
  }

  cancelCreate(event: boolean): void {
    if (event)
      this.router.navigate(['/projects']);
  }

}
