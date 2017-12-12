import { UpgradeModule } from '@angular/upgrade/static';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, forwardRef } from '@angular/core';

import { AppComponent } from './app.component';

declare var angular: angular.IAngularStatic;

@NgModule({
  /*declarations: [
    AppComponent
  ],*/
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  // providers: [],
  // bootstrap: [AppComponent]
})
export class AppModule {
	constructor(private upgrade: UpgradeModule) { }
	ngDoBootstrap() {
		this.upgrade.bootstrap(document.body, ['heroApp'], ['CI']);
	}
}

angular.module('heroApp', [])
	.controller('MainCtrl', function() {
	this.message = 'Hybrid App Works!!!';
});