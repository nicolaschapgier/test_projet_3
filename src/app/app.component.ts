import { Component } from '@angular/core';

import { IconService } from '@visurel/iconify-angular/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test_p3';
  footer : boolean = true;
  test : boolean = false;
}
