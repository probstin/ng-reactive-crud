import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <a routerLink="registration">Registration</a>
  <main class="p-4">
    <router-outlet></router-outlet>
  </main>
  `
})
export class AppComponent { }
