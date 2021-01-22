import React from 'react'
import { Calendar, momentLocalizer  } from 'react-big-calendar' 
import 'react-big-calendar/lib/sass/styles.scss'
//import 'react-big-calendar/lib/css/react-big-calendar.css'                                                             
import moment from 'moment'
import events from '../components/events'
import './Calender.css'
import Toolbar from 'react-big-calendar/lib/Toolbar';

class CalendarToolbar extends Toolbar {

	componentDidMount() {
		const view = this.props.view;
		console.log(view)
	}

	render() {
		return (
			<div className="main">
        
        
				<div className="rbc-btn-group">
          <button  onClick={() => this.navigate('NEXT')}><i class="fas fa-arrow-left"></i></button>
          <div className="rbc-toolbar-label">{this.props.label}</div>
          <div className="rbc-btn-button">
          <button  className="month" type="button" onClick={this.view.bind(null, 'month')}>Month</button>
					<button className="week" type="button" onClick={this.view.bind(null, 'week')}>Week</button>
					
				</div>
          
				</div>
				
			
			</div>
		);
	}
}
 


const localizer = momentLocalizer(moment)
const customDayPropGetter = (date: Date, label) => {
  if (date.getDay() === 6 || date.getDay()=== 5)
  
    return {
      className: 'special-day',
      style: {
        //border: 'solid 3px ' + (date.getDate() === 6 ? '#faa' : '#afa'),
       

        
      },
    };
  else return {};
  
};


const CountEvent = (event, date: Date) => { 
  var count=0;
  var eventdates= localizer.format(event.start, 'DD');
  //var dates=localizer.format(date, 'DD');
  
  if(eventdates){
    count=count+2;
     
    };
    return alert(eventdates);
}





const EventComponent = (event) => { return ( 
<span> <i class="far fa-square"></i> {event.title} </span> ) }



let even = [
  {
    startDate: moment().format("YYYY-MM-DD"),
    endDate: moment().format("YYYY-MM-DD")
  },
  {
    startDate: moment()
      .add(2, "days")
      .format("YYYY-MM-DD"),
    endDate: moment()
      .add(4, "days")
      .format("YYYY-MM-DD")
  }
];
const MyCalendar = props => (
  
  


  
 


  <div>
    <Calendar
    
   
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
        dateHeader: ({ date, label }) => {
          let highlightDate =
          date.getDay() === 5 || date.getDay() === 6
          let count=0
          
          return (
            <div style={highlightDate ? { color: "red", fontSize: "large",} : { color: "white", fontSize: "large"}}>{label}</div>
            
          );
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