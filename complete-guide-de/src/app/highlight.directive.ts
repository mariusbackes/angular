import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  @Input() defaultColor = 'white';
  @Input() highlightColor = 'green';

  // Mit Decorator
  @HostBinding('style.backgroundColor') color = this.defaultColor;

  @HostListener('mouseenter') mouseenter() {
    this.color = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave() {
    this.color = this.defaultColor;
  }

  /*
  constructor(elRef: ElementRef, renderer: Renderer) {
    // elRef.nativeElement.style.backgroundColor = 'green';

    // Besserer Weg
    renderer.setElementStyle(elRef.nativeElement, 'background-color', 'green');
  }
  */

  ngOnInit() {
    setTimeout(() => {
      this.color = 'red';
    }, 3000);

    this.color = this.defaultColor;
  }

}
