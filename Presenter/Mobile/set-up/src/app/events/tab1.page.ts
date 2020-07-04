import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddeventPage} from './addevent/addevent.page'
import { Event} from '../Entities/Event'
import { EventsService} from '../services/events.service'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  providers:[EventsService]
})
export class Tab1Page {
  list:Event[];
  constructor(public modalController: ModalController  , private es : EventsService){
  }


  ngOnInit() {
    console.log("ngOnInit")
    this.es.get().then((data)=>this.list=data);

  }

  addEvent() {  
    this.createModal({ list: this.list });
  }

  editEvent(event) {
    this.createModal({ list: this.list, eventToEdit:event });
  }

  async createModal(param){

    const modal = await this.modalController.create({
        component: AddeventPage,
        componentProps: param
    });

    modal.onDidDismiss().then(
      ()=>{
        console.log("onDidDismiss")
        this.es.get().then((data)=>this.list=data);
      }
    );
    
    return await modal.present();
  }


  
}
