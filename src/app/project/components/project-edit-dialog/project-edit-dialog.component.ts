import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-project-edit-dialog',
  templateUrl: './project-edit-dialog.component.html'
})
export class ProjectEditDialogComponent implements OnInit {

  project!: any;
  error!: string;

  constructor(
    private _ref: DynamicDialogRef,
    private _config: DynamicDialogConfig,
    private _projectsService: ProjectsService
  ) { }

  // ==================
  // lifecycle
  // ==================

  ngOnInit(): void {
    this.project = this._config.data;
  }

  // ==================
  // event handlers
  // ==================

  editProject(projectUpdates: any): void {
    this._projectsService
      .updateProjectById(projectUpdates.id, projectUpdates)
      .subscribe({
        next: () => this._ref.close(projectUpdates),
        error: error => this._handleError(error)
      });
  }

  cancelEdit(cancel: boolean): void {
    if (cancel) this._ref.close();
  }

  // ==================
  // helpers
  // ==================

  private _handleError(error: any): void {
    this.error = error.message ?? error.error.message ?? 'An unknown error occurred.';
  }

}
