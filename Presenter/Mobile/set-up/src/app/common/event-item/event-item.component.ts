import { Component, OnInit, Input ,ChangeDetectionStrategy} from '@angular/core';
import {Event} from '../../Entities/Event'
import { CounterInJsonPipe} from '../../common/pipes/counter-in-json/counter-in-json.pipe'
import { DateDetailsPipe} from '../../common/pipes/date-details/date-details.pipe'
@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.scss']
})
export class EventItemComponent implements OnInit {

  @Input() event:Event;
  constructor() { }

  ngOnInit() {
  }
}
