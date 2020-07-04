import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-event-task',
  templateUrl: './event-task.component.html',
  styleUrls: ['./event-task.component.scss'],
})
export class EventTaskComponent implements OnInit {

  @Input() task;
  @Input() icon;
  @Input() showdate:Boolean;

  constructor() { }

  ngOnInit() {
  }

}
