import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
// import { ThemeableBrowser, ThemeableBrowserOptions, ThemeableBrowserObject } from '@ionic-native/themeable-browser';

import { LoadingController } from "ionic-angular"

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, private platform: Platform, private iab: InAppBrowser) {
    this.platform = platform;
  }

  showBrowser() {

    this.presentLoadingDefault();

    const browser = this.iab.create('https://movilandme.es/', '_self', 'location=no,zoom=no,hardwareback=no');

  }

  closeApp() {

    this.platform.exitApp();

  }

  presentLoadingDefault() {
    const loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();

    setTimeout(() => {

      loading.dismiss();

    }, 5000);

  }


}
