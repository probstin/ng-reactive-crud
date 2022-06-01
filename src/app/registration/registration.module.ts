import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration.component';
import { PrimengModule } from '../primeng.module';
import { SharedModule } from '../shared/shared.module';
import { StepOneComponent } from './components/step-one/step-one.component';
import { StepTwoComponent } from './components/step-two/step-two.component';
import { StepThreeComponent } from './components/step-three/step-three.component';

@NgModule({
  declarations: [
    RegistrationComponent,
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent
  ],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    PrimengModule,
    SharedModule
  ]
})
export class RegistrationModule { }
