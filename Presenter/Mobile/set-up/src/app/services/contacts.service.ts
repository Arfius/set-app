import { Injectable } from '@angular/core';
import {Profile} from '../Entities/Profile'

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private contacts:Profile[]=[];
  constructor() { 
     //to be removed
     let phone=10;
     let con:String[]= ["Adriano Celentano","Al Bano","Toto Cutugno","Vladim Putin","Donald Trump","Carlo Rossi","Giuseppe Bianchi","Antonio La Trippa","Pasquale Nocera","Lillo Firetto","Paolino Di Sutera"]
     for(let c of con ){
       let p1 = new Profile()
       p1.name=c;
       p1.phone_number="+39"+phone;
       phone++;
       this.contacts.push(p1)
     }
  }

  getContacts(){
    return this.contacts.slice();
  }

}
