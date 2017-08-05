import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase , FirebaseListObservable} from 'angularfire2/database';
import { ChatroomPage } from './chatroom/chatroom';

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class ChatPage {

    public chatList : FirebaseListObservable< any[] >;
    constructor(public navCtrl: NavController, public db: AngularFireDatabase) {
        this.chatList = this.db.list('/groups');
    };
  
    goToRoom(chat) {
        this.navCtrl.push(ChatroomPage,{
            group:chat,
        });
    }

}
