import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams, Content} from 'ionic-angular';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
export class User {
    public email : string;
    public uid : string;
    public displayName : string;
}
@Component({selector: 'page-chatroom', templateUrl: 'chatroom.html'})

export class ChatroomPage {
    @ViewChild(Content)public content : Content;
    public chat : any;
    public user: User;
    public messageList : FirebaseListObservable < any[] >;
    public newMessage : string;
    constructor(public navCtrl : NavController, public navParams : NavParams, public afDB : AngularFireDatabase,public afAuth: AngularFireAuth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.newMessage = '';
        const chat = this
            .navParams
            .get('chat');
        this.chat = chat;
        this.afAuth.authState.subscribe(user => {
             this.user = user;
        });
        this.messageList = this
            .afDB
            .list('/groups/' + chat.$key + '/messageList', {
                query: {
                    orderByChild: 'createDt'
                }
            });
    }
    ionViewDidEnter() {
        this
            .content
            .scrollToBottom(0)
    }
    sendMessage() {
        const chat = this
            .navParams
            .get('chat')
        const meessage = {
            senderID: this.user.uid,
            createDt: Date.now(),
            message: this.newMessage
        }
        this
            .afDB
            .list('/groups/' + chat.$key + '/messageList')
            .push(meessage);

        const chatObj = this
            .afDB
            .object('/groups/' + chat.$key);
        if (chat.user1ID == this.user.uid) {
            chatObj.update({
                updateDt: Date.now(),
                LastMessage: this.newMessage,
            })

        } else {
            chatObj.update({
                updateDt: Date.now(),
                LastMessage: this.newMessage,
            })
        }
        this.newMessage = '';
    }

}