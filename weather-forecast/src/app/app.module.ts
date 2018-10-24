import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { routingComponents, AppRoutingModule } from './app.routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { customProviders } from './app.providers';


export const MaterialModules = [

];

@NgModule({
  declarations: [AppComponent, routingComponents],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModules,
  ],
  providers: [customProviders],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }

