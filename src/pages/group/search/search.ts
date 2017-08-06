import { Component } from '@angular/core';
import { NavController , App} from 'ionic-angular';

@Component({
    selector: 'page-group-searh',
    templateUrl: 'search.html'
})
export class GroupSearchPage {
    constructor(public navCtrl: NavController, public appCtrl : App) {
        
    }

    search () {
        this.navCtrl.popToRoot();
    }

}
