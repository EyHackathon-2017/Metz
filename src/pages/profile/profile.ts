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
    selector: 'page-profile',
    templateUrl: 'profile.html'
})
export class ProfilePage {
    public user : User;
    constructor(public navCtrl: NavController, public db: AngularFireDatabase , public afAuth: AngularFireAuth) {
        
        this.user = this.afAuth.auth.currentUser;
        console.log(this.user);
    }

}
