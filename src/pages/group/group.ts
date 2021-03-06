import { Component } from '@angular/core';
import { NavController , App} from 'ionic-angular';
import { AngularFireDatabase , FirebaseListObservable} from 'angularfire2/database';
import { GroupDetailPage } from './detail/detail';
import { GroupSearchPage } from './search/search';
import { CreateGroupPage } from './create-group/create-group';

@Component({
    selector: 'page-group',
    templateUrl: 'group.html'
})
export class GroupPage {
    public groupList : FirebaseListObservable< any[] >;
    constructor(public navCtrl: NavController, public db: AngularFireDatabase, public appCtrl : App) {
        this.groupList = this.db.list('/groups');
        
    }

    createGroup() {
        this.navCtrl.push(CreateGroupPage)
    }

    goToDetail (group) {
        this.appCtrl.getRootNav().push(GroupDetailPage,{
            group:group,
        });
    }

    goToSearch () {
        this.appCtrl.getRootNav().push(GroupSearchPage);
    }

}
