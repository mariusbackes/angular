import { Component } from "@angular/core";
import {ComponentCanDeactivate} from "./user-edit.guard";

@Component({
  template: `
    <div class="row">
      <div class="col-xs-12">
        <p>Möchtest du deinen Account bearbeiten?</p>
        <button class="btn btn-primary" (click)="onSave()">Speichern</button>
      </div>
    </div> 
  `
})
export class UserEditComponent implements ComponentCanDeactivate {
  saved: boolean = false;

  OnSave() {
    this.saved = true;
  }

  canDeactivate() {
    return !this.saved ? confirm('Sicher, wurde nicht gespeichert?') : true;
  }
}
