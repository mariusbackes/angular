import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { PropertyBindingComponent } from './databinding/property-binding.component';
import { EventBindingComponent } from './databinding/event-binding.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Other2Component } from './other2/other2.component';
import { LifecycleComponent } from './lifecycle.component';
import { HighlightDirective } from './highlight.directive';
import { UnlessDirective } from './unless.directive';
import { CmpBComponent } from './service/cmp-b.component';
import { CmpAComponent } from './service/cmp-a.component';
import { ServiceComponent } from 'app/service/service.component';
import { LogService } from './service/log.service';
import {UserComponent} from './user/user.component';
import {UserDetailComponent} from './user/user-detail.component';
import {UserEditComponent} from './user/user-edit.component';
import {routing} from './app.routing';
import {UserDetailGuard} from "./user/user-detail.guard";
import {UserEditGuard} from "./user/user-edit.guard";
import {ReactiveComponent} from "./reactive/reactive.component";
import {TemplateDrivenComponent} from "./template-driven/template-driven.component";
import { MulitplyPipe } from './mulitply.pipe';
import {FilterPipe} from "app/filter.pipe";
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    DatabindingComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    Other2Component,
    LifecycleComponent,
    HighlightDirective,
    UnlessDirective,
    ServiceComponent,
    CmpAComponent,
    CmpBComponent,
    UserComponent,
    UserDetailComponent,
    UserEditComponent,
    TemplateDrivenComponent,
    ReactiveComponent,
    MulitplyPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [LogService, UserDetailGuard, UserEditGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
