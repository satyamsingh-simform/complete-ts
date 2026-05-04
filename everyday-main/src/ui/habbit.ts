import { addHabit, deleteHabit, getHabits, updateHabit } from "../services/habbitService";
import { clearElement, createElement, getElementById } from "../utils/DOMHelper";
import { renderCount } from "./countUI";
import { renderGrid } from "./grid";

export function initHabitUI(renderAll:()=>void){
  const form=getElementById<HTMLFormElement>("add-habit-form");
  const input=getElementById<HTMLInputElement>("habit-input");

  form.addEventListener("submit",e=>{
    e.preventDefault();
    if(!input.value.trim()) return;
    addHabit(input.value);
    form.reset();
    renderAll();
  });
}

export function renderHabits(renderAll:()=>void){
  const container=getElementById<HTMLDivElement>("habit-list");
  clearElement(container);

  getHabits().forEach(h=>{
    const item=createElement("div","habit-item");

    const name=createElement("span","habit-name",h.name);
    const delBtn=createElement("button","delete-btn","✕");

    delBtn.addEventListener("click",(e)=>{
      e.stopPropagation();
      deleteHabit(h.id);
      renderAll();
    });

    item.addEventListener("click",()=>{
      const newName=prompt("Edit habit",h.name);
      if(newName) updateHabit(h.id,newName);
      renderAll();
    });

    item.append(name,delBtn);
    container.appendChild(item);
  });
}