import { Component, OnInit } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi  } from '@fullcalendar/angular';
import { EventServiceService } from 'src/app/services/event-service.service';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})


export class EventsComponent implements OnInit {

  constructor(private EventService:EventServiceService) { }
  
  ngOnInit(): void {
    //this.toCalendar();
    //events:this.toCalendar.bind(this.eventList);
    
  }
  
}
