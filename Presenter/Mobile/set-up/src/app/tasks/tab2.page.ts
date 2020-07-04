import { Component } from '@angular/core';
import { Task } from '../Entities/Task'
import { Event } from '../Entities/Event'
import { ModalController } from '@ionic/angular';
import { ChatPage } from "../chat/chat.page";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  todaytasks:Task[]=[]
  othertasks:Task[]=[]

  showtrue:Boolean=true;  
  showfalse:Boolean=false;



  constructor(public modalController: ModalController ){
    //to be removed
    let t:Task = new Task();
    t.description="description";
    t._id="123456789"
    t.isyours=true;
    t.status=0;
    t.title="Il task che ho da fare";


    let event:Event = new Event();
    event.title="titolo evento"
    t.event=event;
    t.deadline= new Date().toISOString();
    this.todaytasks.push(t);
    this.othertasks.push(t);

    
  }

  async openChat(task){
    const modal = await this.modalController.create({
      component: ChatPage,
      componentProps: task
  });

  modal.onDidDismiss().then(
    ()=>{
      console.log("onDidDismiss")
    }
  );
  
  return await modal.present();
  }
}
