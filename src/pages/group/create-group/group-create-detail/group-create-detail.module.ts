import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GroupCreateDetailPage } from './group-create-detail';

@NgModule({
  declarations: [
    GroupCreateDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(GroupCreateDetailPage),
  ],
})
export class GroupCreateDetailPageModule {}
