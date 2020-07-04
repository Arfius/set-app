import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { TranslateModule } from '@ngx-translate/core';
import { EventItemComponent} from '../common/event-item/event-item.component';
import { ContactsComponent} from '../common/contacts/contacts.component';
import { EventComponent} from '../common/event/event.component';
import { InvitedlistXComponent} from '../common/invitedlist-x/invitedlist-x.component'
import { AddeventPage} from './addevent/addevent.page'
import { AddtaskPage} from './addtask/addtask.page'
import { TaskComponent} from '../common/task/task.component'
import { CounterInJsonPipe } from '../common/pipes/counter-in-json/counter-in-json.pipe';
import { DateDetailsPipe } from '../common/pipes/date-details/date-details.pipe';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }]),
    TranslateModule.forChild() ],
  declarations: [Tab1Page,EventItemComponent,DateDetailsPipe,AddeventPage,AddtaskPage,ContactsComponent,EventComponent,InvitedlistXComponent,TaskComponent,CounterInJsonPipe],
  entryComponents:[AddeventPage,AddtaskPage]
})
export class Tab1PageModule {}
