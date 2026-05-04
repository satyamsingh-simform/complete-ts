import { getDates } from "./services/dateService";
import { renderCalendar } from "./ui/calendarUI";
import { renderCount } from "./ui/countUI";
import { renderGrid } from "./ui/grid";
import { initHabitUI, renderHabits } from "./ui/habbit";



// import {getDates} from "./services/DateService";

const dates=getDates(10);

function renderAll(){
  renderCalendar(dates);
  renderCount(dates); 
  renderHabits(renderAll);
  renderGrid(dates);
}

document.addEventListener("DOMContentLoaded",()=>{
  initHabitUI(renderAll);
  renderAll();
});