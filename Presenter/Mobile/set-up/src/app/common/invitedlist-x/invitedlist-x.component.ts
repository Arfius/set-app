import { Component, OnInit,Input } from '@angular/core';
import { Profile } from '../../Entities/Profile'

@Component({
  selector: 'app-invitedlist-x',
  templateUrl: './invitedlist-x.component.html',
  styleUrls: ['./invitedlist-x.component.scss'],
})
export class InvitedlistXComponent implements OnInit {
  @Input() list:Profile[];

  constructor() { }


  ngOnInit() {}

}
