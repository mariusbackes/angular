import { Component } from '@angular/core';

@Component({
  selector: 'app-another',
  template: `
    <h1>Another Component</h1>
    <hr>
    <ng-content></ng-content>
  `,
  styles: []
})
export class AnotherComponent {

}
