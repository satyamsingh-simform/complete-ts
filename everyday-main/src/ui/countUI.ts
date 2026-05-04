import { getCountByDate } from "../services/logService";
import { clearElement, createElement, getElementById } from "../utils/DOMHelper";

export function renderCount(dates:string[]){
  const container=getElementById<HTMLDivElement>("count-row");
  clearElement(container);

  dates.forEach(date=>{
    const count=getCountByDate(date);
    const cell=createElement("div","count-cell",String(count));
    container.appendChild(cell);
  });
}