import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase , FirebaseListObservable} from 'angularfire2/database';
import { GroupCreateDetailPage } from './group-create-detail/group-create-detail'

/**
 * Generated class for the CreateGroupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-group',
  templateUrl: 'create-group.html',
})
export class CreateGroupPage {

  public flightList : FirebaseListObservable< any[] >;
  public flight: FirebaseListObservable< any[] >;

  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase) {
    this.flightList = this.db.list('/flight', {
      query: {
        orderByChild: 'available_seat',
        startAt : '20'
      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateGroupPage');
  }

  goToGroupCreateDetail(flight) {
    this.navCtrl.push(GroupCreateDetailPage, {
      flight: flight
    })
  }
}
