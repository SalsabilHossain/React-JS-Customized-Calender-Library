import React from 'react'
import { Calendar, momentLocalizer  } from 'react-big-calendar' 
import moment from 'moment'
import wevents from '../components/wevents'
//import 'react-big-calendar/lib/css/react-big-calendar.css'  
import './WeekCalender.css'


const localizer = momentLocalizer(moment);

const task=wevents;
console.log(moment(task[1].start).format('YYYY-MM-DD'));

const customSlotPropGetter = (date: Date) => {
  if(task.find(event =>
    moment(date).isBetween(
      moment(event.start).format('Hmm'),
      moment(event.end).format('Hmm'),
      null,
      "[]"
    )
  ) != undefined)
  
    return {
      className: 'special',
      style: {
        //border: 'solid 3px ' + (date.getDate() === 6 ? '#faa' : '#afa'),
        border: 'red',
       
          
      
      },
    };
  else return {};
  };

  
  const EventComponent = (event) => { 
    return ( 
      
        <div className="eventList">
          
          <span className="ct"> {event.title}</span>
          
        </div>
        
        ) }
    

const WeekCalendar = props => (
  
  


  
 


    <div>
      <Calendar
      
        
        
        
        localizer={localizer}
        events={wevents}
        startAccessor="start"
        
        style={{ height: '100vh' }}
        
        views={{
          month: true,
          week: true,
          
        }}
        defaultView={'week'}
        slotPropGetter={customSlotPropGetter}
        components={{
          event: EventComponent
        }}
      
      
        
        
       
  
     />
    </div>
  )
  
  
  export default WeekCalendar;