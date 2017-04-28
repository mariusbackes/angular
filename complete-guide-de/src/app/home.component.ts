import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  template: `
    <div class="row">
      <div class="col-xs-12">
        <h2>Home</h2>
        <p>{{token}} | {{fragment}}</p>
      </div>
    </div>
  `
})
export class HomeComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private subscriptionFragment: Subscription;
  token: string;
  fragment: string;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.subscription = this.activatedRoute.queryParams.subscribe(
      (queryParams: Params) => this.token = queryParams['token']
    );
    this.subscriptionFragment = this.activatedRoute.fragment.subscribe(
      fragment => this.fragment = fragment
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscriptionFragment.unsubscribe();
  }
}
