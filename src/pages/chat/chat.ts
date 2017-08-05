import { Component } from '@angular/core';
import { NavController , App } from 'ionic-angular';
import { AngularFireDatabase , FirebaseListObservable} from 'angularfire2/database';
import { ChatroomPage } from './chatroom/chatroom';

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class ChatPage {

    public chatList : FirebaseListObservable< any[] >;
    constructor(public navCtrl: NavController, public db: AngularFireDatabase, public appCtrl : App) {
        this.chatList = this.db.list('/groups');
    };
  
    goToRoom(chat) {
        this.appCtrl.getRootNav().push(ChatroomPage,{
            chat:chat,
        });
    }

}
