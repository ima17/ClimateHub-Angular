import { Component, OnInit } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi  } from '@fullcalendar/angular';
import { EventServiceService } from 'src/app/services/event-service.service';
import { FullCalendarModule } from '@fullcalendar/angular'; // calendar

import {Event } from 'src/app/event';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  

  constructor(private EventService:EventServiceService) { }

  ngOnInit(): void {
    this.toCalendar();
    events:this.toCalendar.bind(this.eventList);
    
  }

  
  eventList: any;

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this), // bind is important!
    // events: [
    //   { title: 'event 1', date: '2021-04-01' },
    //   { title: 'event 2', date: '2021-04-02' }
    // ]

    
  };

  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr)
  }

  toCalendar(){
    this.EventService.getData().subscribe(res=>{
      for(let i=0;i<=Object.keys(res).length;i++){
        this.eventList=res;
        
      }
    });
  }

  

}
