import { Injectable } from '@angular/core';
import { Task} from '../Entities/Task'
import { Storage } from '@ionic/storage';
@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private storage: Storage) { 
    this.storage.get('tasks').then((data)=>{
      if(data==null)
      this.mMP([]);
    })
  }

  async get():Promise<Event[]>{
    const data = await this.storage.get('tasks'); 
    return data
  }


  async update(task:Task){
    const data = await this.storage.get('tasks'); 
    let index = data.findIndex(i => i._id == task._id);
    data[index]=event;
    return this.mMP(data);
  }

  async remove(task:Task){
    const data = await this.storage.get('tasks'); 
    let index=data.indexOf(event);
    data.splice(index,1);
    return this.mMP(data);
  }
  
  mMP(data){
    return this.storage.set("events",data)
  }
}
