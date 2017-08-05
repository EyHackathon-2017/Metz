import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

/**
 * Generated class for the GroupCreateDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-group-create-detail',
  templateUrl: 'group-create-detail.html',
})
export class GroupCreateDetailPage {

  public flight : FirebaseObjectObservable< any[] >;
  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase, public navparams : NavParams) {
    this.flight = this.navParams.get('flight');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupCreateDetailPage');
  }

}
