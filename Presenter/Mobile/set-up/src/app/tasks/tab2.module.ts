import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { TranslateModule } from '@ngx-translate/core';
import { EventTaskComponent} from '../common/event-task/event-task.component'
import { ChatPage } from "../chat/chat.page";


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab2Page }]),
    TranslateModule.forChild()
  ],
  declarations: [Tab2Page,EventTaskComponent,ChatPage],
  entryComponents:[ChatPage]

})
export class Tab2PageModule {}
