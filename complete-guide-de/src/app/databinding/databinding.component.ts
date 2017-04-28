import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styles: [`
    .red-border {
      border: 1px solid red;
    }
  `]
})
export class DatabindingComponent {
  aString = 'Ich bin ein String';
  aNumber = 100;
  attachClass = false;

  constructor() {

    // Neuer Syntax ECMA6
    setTimeout(() => {
      this.aNumber += 200;
      this.attachClass = true;
    }, 3000);

    // Alte Syntax ECMA5
    /*
    setTimeout(function () {
      this.aNumber += 200;
    }, 3000);*/
  }

  onClick(event: Event) {
    console.log(event);
  }
}
