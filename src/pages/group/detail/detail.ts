import { Component } from '@angular/core';
import { NavController ,NavParams , App} from 'ionic-angular';
import { AngularFireDatabase , FirebaseObjectObservable} from 'angularfire2/database';
import { ChatroomPage } from '../../../pages/chat/chatroom/chatroom';

@Component({
    templateUrl: 'detail.html',
    selector: 'page-group-detail',
})
export class GroupDetailPage {
    public group : FirebaseObjectObservable< any >;
    public flight : FirebaseObjectObservable< any >;
    public flighKey: String;
    constructor(public navCtrl: NavController, public db: AngularFireDatabase, public navParams : NavParams, public appCtrl : App) {
        this.flighKey = this.navParams.get('key');
        this.group = this.navParams.get('group');  
    }

    joinUs(){
        this.appCtrl.getRootNav().push(ChatroomPage,{
            chat:this.group,
        });
    }

}
