import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
<div  dir="rtl" class="container-fluid">
  <router-outlet ></router-outlet>
</div>
`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

}
