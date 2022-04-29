import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';

@NgModule({
  exports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    DropdownModule,
    InputTextareaModule,
    CheckboxModule,
    DynamicDialogModule,
    NgxPaginationModule
  ]
})
export class PrimengModule { }
