import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { StepsModule } from 'primeng/steps';
import { MenuModule } from 'primeng/menu';

@NgModule({
  exports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    DropdownModule,
    InputTextareaModule,
    CheckboxModule,
    DynamicDialogModule,
    NgxPaginationModule,
    StepsModule,
    MenuModule
  ]
})
export class PrimengModule { }
