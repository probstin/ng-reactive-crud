import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';
import { Observable } from 'rxjs';
import { ProjectFormComponent } from '../project-form/project-form.component';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  providers: [DialogService]
})
export class ProjectDetailsComponent implements OnInit {

  project$!: Observable<any>;

  constructor(
    private _route: ActivatedRoute,
    private _projectsService: ProjectsService,
    private _dialogService: DialogService
  ) { }

  ngOnInit(): void {
    const projectId = this._route.snapshot.params['id'];

    if (projectId) {
      this.project$ = this._projectsService.getProjectById(projectId);
    }
  }

  editProject(project: any) {
    const ref = this._dialogService.open(
      ProjectFormComponent,
      {
        data: { project },
        header: `Edit ${project.name}`,
        width: '70%'
      }
    );

    ref.onClose.subscribe((project: any) => {
      if (project) {
      }
    });
  }

}
