import { Component } from '@angular/core';

export enum StepDirection {
  NEXT = 'NEXT',
  PREVIOUS = 'PREVIOUS'
}

const steps = [
  { label: 'Step 1' },
  { label: 'Step 2' },
  { label: 'Step 3' }
];

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html'
})
export class RegistrationComponent {

  steps = steps;
  activeIndex: number = 0;
  stepDirection = StepDirection;

  constructor() { }

  ngOnInit() {
  }

  changeStep(stepDirection: StepDirection): void {
    const currentIndex = this.activeIndex;

    if (stepDirection === StepDirection.NEXT && this.steps[currentIndex + 1])
      this.activeIndex++;

    if (stepDirection === StepDirection.PREVIOUS && this.steps[currentIndex - 1])
      this.activeIndex--;
  }

}
