import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddtaskPage} from '../addtask/addtask.page';
import { Event } from '../../Entities/Event';
import { ContactsService } from '../../services/contacts.service'
import { EventsService} from '../../services/events.service'

@Component({
  selector: 'app-addevent',
  templateUrl: './addevent.page.html',
  styleUrls: ['./addevent.page.scss'],
  providers:[ContactsService],
})
export class AddeventPage implements OnInit {

  constructor(public modalController: ModalController,
              public cs:ContactsService,private es:EventsService) { }
  wizard=0;

  event:Event;
  @Input() eventToEdit:Event;

  ngOnInit() {
    console.log("ngOnInit");
    if(this.eventToEdit){
      this.event=this.eventToEdit;
    }else{
      this.event=this.es.create();
    }
  }

  

  dismiss(){
    this.wizard=0;
    
  }
  next(){
    this.wizard++;
  }
  async save(){
    const d = await this.es.addOrUpdate(this.event);
    this.modalController.dismiss();
  }

  previous(){
    this.wizard--;

  }

  async addTask(){
    const modal = await this.modalController.create({
      component: AddtaskPage,
      componentProps: {tasklist:this.event.tasks,partecipants:this.event.partecipants}
    });
    return await modal.present();
  }


}
