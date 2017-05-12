import {animate, Component, transition} from "@angular/core";
import {state, trigger, style} from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  animations: [
      trigger('einfach', [
          state('standard', style({
            'background-color': 'green',
            transform: 'translteX(0)'
          })),
          state('markiert', style({
            'background-color': 'blue',
            transform: 'translteX(100px)'
          })),
          transition('standard <=> markiert', animate(300))
      ])
  ]
})
export class AppComponent {
  title = "Animationen";
  state = 'standard';

  onAnimate () {
    this.state == 'standard' ? this.state = 'markiert' : this.state = 'standard';
  }
}
