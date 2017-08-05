import { Component } from '@angular/core';
import { NavController , App} from 'ionic-angular';
import { AngularFireDatabase , FirebaseListObservable} from 'angularfire2/database';

@Component({
    selector: 'page-group-searh',
    templateUrl: 'search.html'
})
export class GroupSearchPage {
    constructor(public navCtrl: NavController, public db: AngularFireDatabase, public appCtrl : App) {
        
    }

    search () {
        this.navCtrl.popToRoot();
    }

}
