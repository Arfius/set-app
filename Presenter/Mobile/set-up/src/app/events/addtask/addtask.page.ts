import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Task } from '../../Entities/Task'
import { Profile } from '../../Entities/Profile'
import { ProfileService } from '../../services/profile.service'
@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.page.html',
  styleUrls: ['./addtask.page.scss'],
  providers: [ ProfileService]
})
export class AddtaskPage implements OnInit {

  constructor(public modalController: ModalController, private ps:ProfileService) { }
  @Input() tasklist:Task[]; 
  @Input() partecipants:Profile[];
  @Input() taskToEdit:Task;
  isAssignedToYou:boolean=false;
  task:Task;
  ngOnInit() {
    if(this.taskToEdit)
      this.task=this.taskToEdit
    else
      this.task=new Task();
  }

  assign(){
    this.task.isyours=true
    this.task.owner = this.ps.getProfile();
  }

  revoke(){
    this.task.isyours=false
  }
 
  edit(){
    let i = this.tasklist.indexOf(this.task);
    this.tasklist[i]=this.task;
    this.modalController.dismiss()

  }

  save(){
    this.tasklist.push(this.task);
    this.modalController.dismiss();
  }
  dismiss(){
   this.modalController.dismiss()
  }

}
