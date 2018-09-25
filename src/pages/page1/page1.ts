import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';


import { Page2 } from '../page2/page2';


import { LoginPage } from '../login/page/page';
import { mapPage } from '../map/map/map';

@Component({
    selector: 'page-page1',
    templateUrl: 'page1.html'
})
export class Page1 {

    constructor(public navCtrl: NavController) {
    }

    onLink(url: string) {
        window.open(url);
    }
    openFirstPage(){
    	this.navCtrl.push(Page2);
    }
    openLoginPage() {
      this.navCtrl.push(LoginPage);
  	}
  	openMapPage() {
      this.navCtrl.push(mapPage);
  	}
  
}
