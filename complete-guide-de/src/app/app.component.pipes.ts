import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  // Pipes
  text = 'irgendein text';
  date = new Date();
  list = ['Brot', 'Milch', 'Honig', 'Vollkornbrot'];
  asyncvalue = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Bin da!');
    }, 2000);
  });

}
