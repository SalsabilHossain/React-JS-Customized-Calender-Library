import {useState} from 'react';
import './App.css';
//import MyCalendar from './components/Calender';
import WeekCalendar from './components/WeekCalender'


function App() {
  const [calenderView, setCalenderView]  = useState("month"); 
  return (
    <div className="App">
      
    <WeekCalendar/>
    </div>
  );
}

export default App;
