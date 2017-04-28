import {Component, OnDestroy, OnInit} from "@angular/core";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  template: `
    <div class="row">
      <div class="col-xs-12">
        <h2>Dein Account</h2>
        <button class="btn btn-primary" (click)="onNavigate()">Zur Startseite</button>
        <p> {{id}}</p>
        <hr>
        <a [routerLink]="['detail']">Detail</a>
        <a [routerLink]="['edit']">Edit</a>
        <hr>
        <router-outlet></router-outlet>
      </div>
    </div>  
  `
})
export class UserComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  id: string;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  onNavigate() {
    this.router.navigate(['/'], {queryParams: {'token': 100}, fragment: 'anchor1'});
  }

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe(
      (params: Params) => this.id = params['id']
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
