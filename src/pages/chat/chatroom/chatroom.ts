import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams, Content} from 'ionic-angular';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {Http, Headers, RequestOptions} from '@angular/http';
export class User {
    public email : string;
    public uid : string;
    public photoUrl : string;
    public displayName : string;
}
@Component({selector: 'page-chatroom', templateUrl: 'chatroom.html'})

export class ChatroomPage {
    @ViewChild(Content)public content : Content;
    public user : User;
    public messageList : FirebaseListObservable < any[] >;
    public receviver : User;
    public newMessage : string;
    constructor(public navCtrl : NavController, public http : Http, public navParams : NavParams, public afDB : AngularFireDatabase) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.newMessage = '';
        const chat = this
            .navParams
            .get('chat');
        this.messageList = this
            .afDB
            .list('/group/' + chat.$key + '/messageList', {
                query: {
                    orderByChild: 'createDt'
                }
            });
        this.receviver = new User();
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
            .list('/group/' + chat.$key + '/messageList')
            .push(meessage);

        const chatObj = this
            .afDB
            .object('/group/' + chat.$key);
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