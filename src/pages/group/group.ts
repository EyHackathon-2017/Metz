import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase , FirebaseListObservable} from 'angularfire2/database';
import { GroupDetailPage } from './detail/detail';

@Component({
    selector: 'page-home',
    templateUrl: 'group.html'
})
export class GroupPage {
    public groupList : FirebaseListObservable< any[] >;
    constructor(public navCtrl: NavController, public db: AngularFireDatabase) {
        this.groupList = this.db.list('/groups');
        
    }

    goToDetail (group) {
        this.navCtrl.push(GroupDetailPage,{
            group:group,
            key: group.flight
        });
    }

}
