import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html'
})
export class ProjectFormComponent implements OnInit {
  @Input() project!: any;

  @Output() formCancelled = new EventEmitter<boolean>();
  @Output() formSubmitted = new EventEmitter<any>();

  projectForm!: FormGroup;
  submitted: boolean = false;
  registerMode: boolean = false;
  categories = ['Angular', 'React'];

  constructor(private _fb: FormBuilder) { }

  // ==================
  // lifecycle
  // ==================

  ngOnInit(): void {
    const project = this.project;

    this.registerMode = !project;

    this.projectForm = this._fb.group({
      id: [{ value: '', disabled: true }],
      name: ['', Validators.required],
      description: [''],
      poc: ['', Validators.required],
      pocEmail: ['', Validators.required],
      category: ['', Validators.required],
      controls: this._fb.array([])
    });

    if (!this.registerMode) this.projectForm.patchValue(project);
  }

  // ==================
  // form submission
  // ==================

  onCancel(): void {
    // check to see if changes have been made
    if (!this.projectForm.pristine) return;

    this.formCancelled.emit(true);
  }

  onSubmit(): void {
    this.submitted = true;

    // reject if the form is invalid
    if (this.projectForm.invalid) return;

    // get the raw value (includes the disabled fields)
    const formValue = this.projectForm.getRawValue();

    this.formSubmitted.emit(formValue);
  }

  // ==================
  // form interactions
  // ==================

  addControl(): void {
    const controlForm = this._fb.group({
      value: ['', Validators.required]
    });

    this.controls.push(controlForm);
  }

  removeControl(controlIndex: number): void {
    this.controls.removeAt(controlIndex);
  }

  // ==================
  // helpers
  // ==================

  get f() { return this.projectForm.controls; }
  get controls() { return this.projectForm.controls['controls'] as FormArray; }

}
