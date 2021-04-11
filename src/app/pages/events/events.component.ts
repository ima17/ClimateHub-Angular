import { Component, OnInit } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi  } from '@fullcalendar/angular';
import { EventServiceService } from 'src/app/services/event-service.service';


import {Event } from 'src/app/event';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  eventList: any;

  constructor(private EventService:EventServiceService) { }

  ngOnInit(): void {
  }
  calendarVisible = true;
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',

    dateClick: this.handleDateClick.bind(this), 
    
    events: [
      { title: 'event 1', date: '2021-04-01' },
      { title: 'event 2', date: '2021-04-02' }
    ],

    //initialEvents: INITIAL_EVENTS,
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    eventsSet: this.handleEvents.bind(this)

    /*
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    you can update a remote database when these fire:
    eventAdd:
    eventChange:
    eventRemove:
    */
  };
  

  currentEvents: EventApi[] = [];

  handleEvents(events: EventApi[]) {
    //this.currentEvents = events;
  }
  
  toCalendar(){
    
    
    this.EventService.getData().subscribe(res=>{
      for(let i=0;i<=Object.keys(res).length;i++){
        this.eventList=res;
        
      }
      
      
    });
  }

  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr)
  }

  
  testFunc(){
      alert("Only for testing");
  }

}
