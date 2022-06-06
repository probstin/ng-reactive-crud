import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrls: ['./step-three.component.css']
})
export class StepThreeComponent implements OnInit {

  @Input() accessControls: any;

  @Output() formCancelled = new EventEmitter<any>();
  @Output() formSubmitted = new EventEmitter<any>();

  availableAccesses = [
    { name: 'TEST123', type: 'GOOD', level: 'ADMIN' },
    { name: 'hello', type: 'GOOD', level: 'ADMIN' }
  ];
  accessControlForm!: FormGroup;
  accessControlFormGroup: { [key: string]: any } = {
    name: ['', Validators.required],
    type: ['', Validators.required],
    level: ['', Validators.required]
  };

  constructor(private _fb: FormBuilder) { }

  // ==================
  // lifecycle
  // ==================

  ngOnInit(): void {
    this.accessControlForm = this._fb.group({
      defaultAccess: [{}, Validators.required],
      additionalAccesses: this._fb.array([])
    });

    if (this.accessControls) {
      console.log(this.accessControls);
      this.addDefaultAccess(this.accessControls.defaultAccess);
    }
  }

  // ==================
  // form submission
  // ==================

  onCancel(): void {
    // check to see if changes have been made
    // if (!this.projectForm.pristine) return;

    const formValue = this.accessControlForm.getRawValue();

    this.formCancelled.emit(formValue);
  }

  onSubmit(): void {
    // reject if the form is invalid
    if (this.accessControlForm.invalid) return;

    // get the raw value (includes the disabled fields)
    const formValue = this.accessControlForm.getRawValue();

    console.log(formValue);

    this.formSubmitted.emit(formValue);
  }

  // ==================
  // form interactions
  // ==================

  addAdditionalAccess(): void {
    const accessControl = this._fb.group(this.accessControlFormGroup);

    this.additionalAccesses.push(accessControl);
  }

  addDefaultAccess(access: any): void {
    this.accessControlForm.patchValue({
      defaultAccess: {
        name: access.name,
        type: access.type,
        level: access.level
      }
    });
  }

  get f() { return this.accessControlForm.controls; }
  get defaultAccess() { return this.accessControlForm.controls['defaultAccess']; }
  get additionalAccesses() { return this.accessControlForm.controls['additionalAccesses'] as FormArray; }

}
