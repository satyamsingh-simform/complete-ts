import type { Habit } from "../models/habbitModel";
import { getData, saveData } from "./storageService";

export function getHabits():Habit[]{
  return getData().habits;
}

export function addHabit(name:string):Habit{
  const data=getData();
  const habit:Habit={
    id:crypto.randomUUID(),
    name:name.trim(),
    createdAt:new Date().toISOString()
  };
  data.habits.push(habit);
  saveData(data);
  return habit;
}

export function deleteHabit(id:string){
  const data=getData();
  data.habits=data.habits.filter(h=>h.id!==id);
  data.logs=data.logs.filter(l=>l.habitId!==id);
  saveData(data);
}

export function updateHabit(id:string,name:string){
  const data=getData();
  const h=data.habits.find(h=>h.id===id);
  if(h) h.name=name.trim();
  saveData(data);
}