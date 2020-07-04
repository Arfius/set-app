import { Component, OnInit,Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Event } from '../../Entities/Event';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventComponent implements OnInit {

  constructor(public modalController: ModalController) { }
  @Input() event:Event;

  ngOnInit() {
  }

  dismiss(){
    this.modalController.dismiss();
  }

}
