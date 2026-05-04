import { formatDate, getDates, isToday } from "../services/dateService";
import { clearElement, createElement, getElementById } from "../utils/DOMHelper";

export function renderCalendar(dates:string[]){
  const container=getElementById<HTMLDivElement>("calendar-row");
  clearElement(container);

//   const dates=getDates(10);

dates.forEach(date=>{
  const f=formatDate(date);
  const box=createElement("div","date-box");

  const m=createElement("span","",f.month);
  const d=createElement("strong","",String(f.day));
  const w=createElement("small","",f.weekday);

  box.append(m,d,w);

  if(isToday(date)) box.classList.add("today");

  container.appendChild(box);
});
}