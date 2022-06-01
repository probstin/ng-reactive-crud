import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { StepDirection } from '../../registration.component';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.css']
})
export class StepOneComponent implements OnInit {

  @Output() changeStep = new EventEmitter<StepDirection>();

  stepDirection = StepDirection;

  constructor() { }

  ngOnInit(): void {
  }

  onChangeStep(stepDirection: StepDirection): void {
    this.changeStep.emit(stepDirection);
  }

}
