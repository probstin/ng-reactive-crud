import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html'
})
export class ProjectFormComponent implements OnInit {

  projectForm!: FormGroup;
  submitted: boolean = false;
  loading: boolean = false;
  createMode: boolean = false;
  categories = ['Angular', 'React']

  constructor(
    private _fb: FormBuilder,
    private _ref: DynamicDialogRef,
    private _config: DynamicDialogConfig
  ) { }

  // ==================
  // lifecycle
  // ==================

  ngOnInit(): void {
    const project = this._config.data.project;
    this.createMode = !project;

    this.projectForm = this._fb.group({
      id: [{ value: '', disabled: true }],
      name: ['', Validators.required],
      description: [''],
      poc: ['', Validators.required],
      pocEmail: ['', Validators.required],
      category: ['', Validators.required]
    });

    if (!this.createMode) {
      this.projectForm.patchValue(project);
    }
  }

  // ==================
  // form submission
  // ==================

  onSubmit(): void {
    this.submitted = true;
    this.loading = true;

    if (this.projectForm.invalid) {
      console.log(this.projectForm.controls);
      return;
    }

    const formValue = this.projectForm.value;

    console.log(formValue);
  }

  // ==================
  // helpers
  // ==================

  get f() { return this.projectForm.controls; }

}
