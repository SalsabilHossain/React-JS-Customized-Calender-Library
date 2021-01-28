import React from 'react'
import { Calendar, momentLocalizer  } from 'react-big-calendar' 
import 'react-big-calendar/lib/sass/styles.scss'
//import 'react-big-calendar/lib/css/react-big-calendar.css'                                                             
import moment from 'moment'
//import events from '../components/events'
import './Calender.css'
import Toolbar from 'react-big-calendar/lib/Toolbar';
import dummyData from '../components/events'

//let task=events;

const events = []
dummyData.forEach(obj => {
  obj.taskData.forEach(
    item => {
      events.push({
        start: moment(item.date),
        end: moment(item.date),
        title: obj.title
      })
    }
  )
}) 

const task=events;
console.log(task[0].start._i);

const localizer = momentLocalizer(moment);

//customToolbar
class CalendarToolbar extends Toolbar {

	componentDidMount() {
		const view = this.props.view;
		console.log(view)
	}

	render() {
		return (
			<div className="main">
          <button  className="arrow" onClick={() => this.navigate('NEXT')}><i class="fas fa-arrow-left"></i></button>
          <div className="rbc-toolbar-label">{this.props.label}</div>
          <button  className="month" type="button" onClick={this.view.bind(null, 'month')}>Month</button>
					<button className="week" type="button" onClick={this.view.bind(null, 'week')}>Week</button>
        
				
				
			
			</div>
		);
	}
}
 





//backgroundcolor
const customDayPropGetter = (date: Date, label) => {
  if(task.find(event =>
    moment(date).isBetween(
      moment(event.start._i).format('YYYY-MM-DD'),
      moment(event.end._i).format('YYYY-MM-DD'),
      null,
      "[]"
    )
  ) != undefined)
  
    return {
      className: 'special-day',
      style: {
        //border: 'solid 3px ' + (date.getDate() === 6 ? '#faa' : '#afa'),
        

      
      },
    };
  else return {};
  };


 //onClickevent
 const CountEvent = (event, date) => { 
  var count=0;
  var eventdates= localizer.format(event.start, 'DD mm yyyy');
  

  
if(eventdates){
    count=count+2;
     
    };
    return alert(eventdates);
} 




//display events
const EventComponent = (event) => { 
return ( 
    <div className="eventList">
      <span className="ct"><i class="far fa-square"></i> {event.title}</span>
    </div>
    
    ) }

    
    



const MyCalendar = props => (
  
  


  
 


  <div>
    <Calendar
    
      popup
      events={events}
      
      
      localizer={localizer}
      events={events}
      startAccessor="start"
      
      style={{ height: '100vh' }}
      onSelectEvent={CountEvent}
      views={{
        month: true,
        week: true,
        
      }}

      
      
      dayPropGetter={customDayPropGetter}
      
      
      components={{
        month: {
          dateHeader: ({ date, label}) => {
            if (date.getDay() === 5 || date.getDay() === 6) { return <div className="weekend">{label}</div>; }
              
              else if (task.find(event =>
                moment(date).isBetween(
                  moment(event.start._i).format('YYYY-MM-DD'),
                  moment(event.end._i).format('YYYY-MM-DD'),
                  null,
                  "[]"
                )
              ) != undefined) { 
                var calDate=moment(date).format('YYYY-MM-DD');
                const result = task.filter(singleTask => moment(singleTask.start._i).format('YYYY-MM-DD')  === calDate);
                console.log(result.length);

                return <div className="list">{label} <div className="taskCount">{result.length} tasks</div> </div>; }
              
              
              else { return <div className="label">{label}</div>; }
          },
          
        
    
      
          },  
   

      event: EventComponent,
    
      toolbar : CalendarToolbar

    }
    
    }

   />
  </div>
)


export default MyCalendar;