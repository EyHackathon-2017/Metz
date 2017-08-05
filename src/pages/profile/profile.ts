import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
    selector: 'page-profile',
    templateUrl: 'profile.html'
})
export class ProfilePage {
   
    constructor(public navCtrl: NavController, private http: Http,db: AngularFireDatabase) {

    }

}
