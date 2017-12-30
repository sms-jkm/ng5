import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  /*template:`<div id="fullpage">
  <app-header></app-header>
  <app-login-form></app-login-form>
  <app-footer></app-footer>
</div>`,*/
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular app ';
}
