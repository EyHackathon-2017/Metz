import { Component } from '@angular/core';
import { NavController ,App } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { SettingPage } from './setting/setting';

export class User {
    public email : string;
    public uid : string;
    public displayName : string;
}
@Component({
    selector: 'page-profile',
    templateUrl: 'profile.html'
})
export class ProfilePage {
    public user : User;
    constructor(public navCtrl: NavController, public afAuth: AngularFireAuth, public appCtrl : App) {
        
        this.user = this.afAuth.auth.currentUser;
        console.log(this.user);
    }

    setting(){
        this.appCtrl.getRootNav().push(SettingPage);
    }
}
