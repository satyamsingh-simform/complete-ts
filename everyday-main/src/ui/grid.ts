import { getDates } from "../services/dateService";
import { getHabits } from "../services/habbitService";
import { isCompleted, isSkipped, toggleLog } from "../services/logService";
import { clearElement, createElement, getElementById } from "../utils/DOMHelper";
import { renderCalendar } from "./calendarUI";
import { renderCount } from "./countUI";

export function renderGrid(dates:string[]){
  const container=getElementById<HTMLDivElement>("grid-container");
  clearElement(container);

  const habits=getHabits();
//   const dates=getDates(10);

  habits.forEach(h=>{
    const row=createElement("div","grid-row");

    dates.forEach(date=>{
      const cell=createElement("div","grid-cell");

      if(isCompleted(h.id,date)) cell.classList.add("done");
      else if(isSkipped(h.id,date)) cell.classList.add("skip");
      
      cell.addEventListener("click",()=>{
        toggleLog(h.id,date);
        renderGrid(dates);
        renderCalendar(dates);
        renderCount(dates);
      });

      row.appendChild(cell);
    });

    container.appendChild(row);
  });
}