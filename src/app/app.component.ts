import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Google Map';
  center = { lat: 10.52522, lng: 76.214492 };
  zoom = 14;
}
