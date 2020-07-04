import { Injectable } from '@angular/core';
import {Profile} from '../Entities/Profile'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private profile:Profile;

  constructor() { 
    this.profile= new Profile();
    this.profile.name="Alfonso F"
    this.profile.phone_number="3398294214"
    this.profile.photo="'../../assets/default/alfonso.jpeg"
    this.profile.status="finche' la barca va lasciala andare"
  }

  getProfile(){
    return this.profile;
  }

  setProfile(p:Profile){
    this.profile=p;
  }

}
