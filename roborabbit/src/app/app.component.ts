import { Component } from '@angular/core';

interface BoberEvent {
  value: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  onChange (v: BoberEvent) {
    console.log(v.value)
  }
}
