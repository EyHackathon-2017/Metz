import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {

  userProfile: any = null;

  constructor(public navCtrl: NavController, public afAuth: AngularFireAuth, public plt :Platform) {
  }

  logIn() {
    if (this.plt.is('mobileweb')) {
      this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(result =>{
         this.navCtrl.setRoot(TabsPage);
      });
    } else {
      this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider()).then(result =>{
        this.navCtrl.setRoot(TabsPage);
      });
    }
  }
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad SignInPage');
  // }

}
