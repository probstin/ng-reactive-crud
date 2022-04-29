import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from '../primeng.module';
import { ProjectEditDialogComponent } from './components/project-edit-dialog/project-edit-dialog.component';
import { ProjectFormComponent } from './components/project-form/project-form.component';
import { ProjectCreateComponent } from './containers/project-create/project-create.component';
import { ProjectDetailsComponent } from './containers/project-details/project-details.component';
import { ProjectListComponent } from './containers/project-list/project-list.component';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectsService } from './services/projects.service';

@NgModule({
  declarations: [
    ProjectListComponent,
    ProjectDetailsComponent,
    ProjectEditDialogComponent,
    ProjectCreateComponent,
    ProjectFormComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    ProjectRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ProjectsService]
})
export class ProjectModule { }
