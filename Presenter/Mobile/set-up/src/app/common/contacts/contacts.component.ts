import { Component, OnInit,Input } from '@angular/core';
import { Profile } from '../../Entities/Profile'
import { ContactsService } from '../../services/contacts.service'

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  providers:[ContactsService]

})
export class ContactsComponent implements OnInit {
  @Input() partecipants:Profile[];
  contacts:Profile[];

  constructor(public cs:ContactsService) { }

  ngOnInit() {
    this.contacts=this.cs.getContacts();
    if(this.partecipants.length>0){
      this.partecipants.forEach(element=>{
        this.contacts.forEach(cont=>{
          if(element.phone_number==cont.phone_number){
            cont.ischecked=true;
          }
        });
      });
    }
  }

  updatePartecipants(p){
    if(p.ischecked){
      this.partecipants.push(p);
    }else{
      let index = this.partecipants.indexOf(p);
      this.partecipants.splice(index,1);
    }
  }

}
