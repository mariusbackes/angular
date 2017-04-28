import {Component, ContentChild, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-other2',
  template: `
    <input type="text" #i (keydown)="0">
    <p>{{input.value}}</p>
    <hr>
    <ng-content></ng-content>
  `,
  styles: []
})
export class Other2Component {

  @ViewChild('i') input: ElementRef;
  @ContentChild('paragraph') paragraph: ElementRef;

  constructor() {
    setTimeout(() => {
      this.input.nativeElement.value = 'Wert überschrieben';
      this.paragraph.nativeElement.innerText = 'Wert überschrieben';
    }, 3000);
  }
}
