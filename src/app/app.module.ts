import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { routingComponents, AppRoutingModule } from './app.routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { customProviders } from './app.providers';
import {
  MatFormFieldModule,
  MatInputModule,
  MatProgressBarModule,
  MatListModule,
  MatIconModule,
  MatExpansionModule,
  MatTabsModule,
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export const MaterialModules = [
  MatTabsModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatProgressBarModule,
  MatListModule,
  MatExpansionModule,
];

export const AppModules = [
  BrowserAnimationsModule,
  BrowserModule,
  HttpClientModule,
  AppRoutingModule,
  MaterialModules, ReactiveFormsModule,
  FormsModule
];

@NgModule({
  declarations: [AppComponent, routingComponents],
  imports: [
    AppModules
  ],
  providers: [customProviders],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }

