import { Component, OnInit,Input } from '@angular/core';
import { Task } from '../../Entities/Task'
import { Profile } from '../../Entities/Profile'
import { ActionSheetController } from '@ionic/angular';
import { AddtaskPage} from '../../events/addtask/addtask.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  @Input() tasklist:Task[];
  @Input() partecipants:Profile[];

  constructor(public modalController: ModalController,public actionSheetController: ActionSheetController) { }

  ngOnInit() {}

  async openSheet(task){
    let self=this;
    const actionSheet = await this.actionSheetController.create({
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          let i = this.tasklist.indexOf(task);
          this.tasklist.splice(i,1);
        }
      }, {
        text: 'Edit',
        icon: 'share',
        handler: () => {
          this.editTask(task);
        }
      }]
    });
    await actionSheet.present();
  }
  async editTask(task){
    const modal = await this.modalController.create({
      component: AddtaskPage,
      componentProps: {tasklist:this.tasklist,partecipants:this.partecipants,taskToEdit:task}
    });
    return await modal.present();
  }

}
