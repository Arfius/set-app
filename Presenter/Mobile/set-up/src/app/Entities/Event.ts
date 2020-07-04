import {Task} from './Task'
import {Profile} from './Profile'
export class Event {

    public _id:String;
    public title:String;
    public description:String;
    public deadline:String=new Date().toISOString();
    public partecipants:Profile[]=[];
    public tasks:Task[]=[];
    public location:String;;
    public owner:String;;
    public status:Number; 
    constructor(){}
    
}