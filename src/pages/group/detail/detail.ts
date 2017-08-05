import { Component } from '@angular/core';
import { NavController ,NavParams } from 'ionic-angular';
import { AngularFireDatabase , FirebaseObjectObservable} from 'angularfire2/database';

@Component({
    templateUrl: 'detail.html'
})
export class GroupDetailPage {
    public group : FirebaseObjectObservable< any >;
    public flight : FirebaseObjectObservable< any >;
    public flighKey: String;
    constructor(public navCtrl: NavController, public db: AngularFireDatabase, public navParams : NavParams) {
        this.flighKey = this.navParams.get('key');
        this.group = this.navParams.get('group');  
    }

}
