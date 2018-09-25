import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';


import { Page2 } from '../page2/page2';


import { LoginPage } from '../login/page/page';
import { mapPage } from '../map/map/map';

import {LoadingController} from 'ionic-angular';

@Component({
    selector: 'page-page1',
    templateUrl: 'page1.html'
})
export class Page1 {

    constructor(public navCtrl: NavController, public loadingCtrl:LoadingController) {
    }

    onLink(url: string) {
        window.open(url);
    }
    openFirstPage(){
    	this.navCtrl.push(Page2);
    }
    openLoginPage() {
		let loader = this.loadingCtrl.create({
			spinner: "bubbles",
			content: "Wait a minute",
			duration: 1000
});
		loader.present();


      this.navCtrl.push(LoginPage);
  	}


  	openMapPage() {
      this.navCtrl.push(mapPage);
  	}
  
}
