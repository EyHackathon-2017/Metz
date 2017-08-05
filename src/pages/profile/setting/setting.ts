import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
export class User {
    public email : string;
    public uid : string;
    public displayName : string;
}
@Component({
    selector: 'page-setting',
    templateUrl: 'setting.html'
})
export class SettingPage {
    constructor(public navCtrl: NavController, public db: AngularFireDatabase , public afAuth: AngularFireAuth) {
        
    }

    logout(){
        this.afAuth.auth.signOut();
    }
}
