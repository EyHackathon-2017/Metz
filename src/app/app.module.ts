import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ProfilePage } from '../pages/profile/profile';
import { SettingPage } from '../pages/profile/setting/setting';

import { GroupPage } from '../pages/group/group';
import { GroupDetailPage } from '../pages/group/detail/detail';
import { GroupSearchPage } from '../pages/group/search/search';
import { CreateGroupPage } from '../pages/group/create-group/create-group';

import { ChatPage } from '../pages/chat/chat';
import { ChatroomPage } from '../pages/chat/chatroom/chatroom';

import { TabsPage } from '../pages/tabs/tabs';
import { SignInPage } from '../pages/sign-in/sign-in'
import { GroupCreateDetailPage } from '../pages/group/create-group/group-create-detail/group-create-detail';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HttpModule } from '@angular/http';
import { MomentModule } from 'angular2-moment';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '924740b4',
  },
  'insights': {
    enabled: true
  }
};
export const firebaseConfig = {
  apiKey: "AIzaSyCe0dL00SM5o3uhhq5VUJW1M2fXSRllbbw",
  authDomain: "metz-8eff0.firebaseapp.com",
  databaseURL: "https://metz-8eff0.firebaseio.com",
  projectId: "metz-8eff0",
  storageBucket: "metz-8eff0.appspot.com",
  messagingSenderId: "899488917710"
};

@NgModule({
  declarations: [
    MyApp,
    ProfilePage,
    SettingPage,
    GroupPage,
    GroupDetailPage,
    GroupSearchPage,
    ChatPage,
    TabsPage,
    SignInPage,
    ChatroomPage,
    TabsPage,
    CreateGroupPage,
    GroupCreateDetailPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,
      { mode: 'ios' }
    ),
    HttpModule,
    MomentModule,
    AngularFireModule.initializeApp(firebaseConfig),
    CloudModule.forRoot(cloudSettings),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProfilePage,
    SettingPage,
    GroupPage,
    GroupDetailPage,
    GroupSearchPage,
    ChatPage,
    TabsPage,
    SignInPage,
    ChatroomPage,
    TabsPage,
    GroupCreateDetailPage,
    CreateGroupPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
