import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CheckboxModule } from 'primeng/checkbox';
import { DynamicDialogModule } from 'primeng/dynamicdialog';

@NgModule({
  exports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    DropdownModule,
    InputTextareaModule,
    CheckboxModule,
    DynamicDialogModule
  ]
})
export class PrimengModule { }
