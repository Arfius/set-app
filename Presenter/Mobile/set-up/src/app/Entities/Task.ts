import {Profile} from './Profile'
import {Event} from './Event'

export class Task {

    public _id:String;
    public title:String;
    public description:String;
    public deadline:String=new Date().toISOString();
    public owner:Profile;
    public isyours:Boolean;
    public status:Number=0; 
    public event:Event;
    constructor(){}
    
}