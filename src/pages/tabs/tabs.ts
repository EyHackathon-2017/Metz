import { Component } from '@angular/core';

import { ProfilePage } from '../profile/profile';
import { ChatPage } from '../chat/chat';
import { GroupPage } from '../group/group';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = GroupPage;
  tab2Root = ChatPage;
  tab3Root = ProfilePage;

  constructor() {

  }
}
