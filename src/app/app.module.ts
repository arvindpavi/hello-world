import { UpgradeModule } from '@angular/upgrade/static';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, forwardRef } from '@angular/core';

import { UpgradeAdapter } from '@angular/upgrade'

import { AppComponent } from './app.component';

import 'angular'

declare var angular:any;
const adapter = new UpgradeAdapter(forwardRef(() => AppModule));

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  entryComponents: [AppComponent],
  // providers: [],
  // bootstrap: [AppComponent]
})
export class AppModule {
	constructor(private upgrade: UpgradeModule) { }
	ngDoBootstrap() {
		// this.upgrade.bootstrap(document.body, ['heroApp']);
	}
}

angular.module('heroApp', [])
	.controller('MainCtrl', function() {
	this.message = 'Hybrid App Works!!!';
}).directive('helloWorld', function() {
  return {
      restrict: 'AE',
      replace: 'true',
      template: '<h3>Hello World!!</h3>'
  };
}).directive('appRoot', adapter.downgradeNg2Component(AppComponent) as angular.IDirectiveFactory)