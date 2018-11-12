import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  direction = 'vertical';

  onSwitchDirection() {
    this.direction = this.direction === 'vertical' ? 'horizontal' : 'vertical';
  }
}
