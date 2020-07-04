import { Component } from '@angular/core';
import { Profile} from '../Entities/Profile';
import { ProfileService } from '../services/profile.service'
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  providers:[ProfileService]
})
export class Tab3Page {
  profile:Profile;
  constructor(ps:ProfileService){
    this.profile=ps.getProfile();
  }
}
