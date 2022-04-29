import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DialogService, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { BehaviorSubject, combineLatest, filter, mergeMap, Observable } from 'rxjs';
import { ProjectEditDialogComponent } from '../../components/project-edit-dialog/project-edit-dialog.component';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  providers: [DialogService]
})
export class ProjectDetailsComponent implements OnInit {

  project$!: Observable<any>;
  refreshProject$ = new BehaviorSubject<boolean>(true);

  constructor(
    private _route: ActivatedRoute,
    private _projectsService: ProjectsService,
    private _dialogService: DialogService
  ) { }

  // ==================
  // lifecycle
  // ==================

  ngOnInit(): void {
    const projectId = this._route.snapshot.params['id'];

    if (projectId) {
      this.project$ = combineLatest([this.refreshProject$])
        .pipe(mergeMap(() => this._projectsService.getProjectById(projectId)))
    }
  }

  // ==================
  // lifecycle
  // ==================

  editProject(project: any): void {
    const dialogConfig: DynamicDialogConfig = {
      data: project,
      header: `Edit ${project.name}`,
      width: '70%'
    };

    const ref = this._dialogService.open(ProjectEditDialogComponent, dialogConfig);

    ref.onClose
      .pipe(filter(() => !project))
      .subscribe(() => this.refreshProject$.next(true));
  }

}
