import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
    selector: 'page-profile',
    templateUrl: 'profile.html'
})
export class ProfilePage {
   
    constructor(public navCtrl: NavController, public db: AngularFireDatabase) {

    }

}
