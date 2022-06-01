import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectFormComponent } from './components/project-form/project-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from '../primeng.module';

@NgModule({
  declarations: [
    ProjectFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PrimengModule
  ],
  exports: [
    ProjectFormComponent
  ]
})
export class SharedModule { }
