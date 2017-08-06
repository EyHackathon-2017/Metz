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


  public grpPref: GroupPreference;
  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase, public navparams : NavParams) {
    this.grpPref = new GroupPreference();
    this.grpPref.flight = this.navParams.get('flight');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupCreateDetailPage');
  }

  confirmCreateGroup() {
    this.db.list('/groups').push(this.grpPref);
    this.navCtrl.popToRoot();
  }

}

export class GroupPreference {
    public name: string;
    public introduction: string;
    public people: number;
    public people_need: number = 0;
    public gender: string;
    public age_down: number;
    public age_up: number;
    public price: number  = parseInt(Math.random() * 3000 + 2000 + "");
    public randPhoto: number = parseInt(Math.random() * 4 + 1 + "");
  constructor(
  ) { }

  public flight : FirebaseObjectObservable< any[] >;
}
