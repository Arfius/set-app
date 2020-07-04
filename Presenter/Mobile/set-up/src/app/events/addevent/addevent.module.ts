import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { AddeventPage } from './addevent.page';
import { AddtaskPage} from '../addtask/addtask.page'

const routes: Routes = [
  {
    path: '',
    component: AddeventPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    TranslateModule.forChild()
  ],
  declarations: [AddeventPage,AddtaskPage]
})
export class AddeventPageModule {}
