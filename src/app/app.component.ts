import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  img =
    'https://res.cloudinary.com/my-notes-demo/image/upload/v1627760417/academy/imac.png';
  width = 100;

  openImage(): void {
    window.open(this.img, '_blank');
  }

  randomImage(): void {
    this.img = 'https://source.unsplash.com/random?x=' + Math.random();
  }

  incWidth(): void {
    if (this.width < 100) {
      this.width++;
    }
  }

  decWidth(): void {
    if (this.width > 10) {
      this.width--;
    }
  }
}
