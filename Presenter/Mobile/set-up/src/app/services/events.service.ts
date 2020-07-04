import { Injectable } from '@angular/core';
import { Event} from '../Entities/Event'
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private storage: Storage) { 
    this.storage.get('events').then((data)=>{
      if(data==null)
      this.mMP([]);
    })
  }

  async get():Promise<Event[]>{
    const data = await this.storage.get('events'); 
    return data
  }

  create(){
    let e:Event = new Event();
    e._id= ""+new Date().getTime();
    return e;
  }

  async addOrUpdate(event:Event){
    const data = await this.storage.get('events'); 
    let index = data.findIndex(i => i._id == event._id);

    if(index<0){
      data.push(event);
      return this.mMP(data);
    }
    else{
      data[index]=event;
      return this.mMP(data);
    }
  }

  async remove(event:Event){
    const data = await this.storage.get('events'); 
    let index=data.indexOf(event);
    data.splice(index,1);
    return this.mMP(data);
  }
  
  mMP(data){
    return this.storage.set("events",data)
  }

}
