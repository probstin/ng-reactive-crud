import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <a routerLink="registration">Registration</a>
  <router-outlet></router-outlet>`
})
export class AppComponent { }
