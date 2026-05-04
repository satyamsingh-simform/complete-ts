import type { HabitLog } from "../models/logModel";
import { getData, saveData } from "./storageService";

export function getLogs():HabitLog[]{
  return getData().logs;
}

export function toggleLog(habitId:string,date:string){
  const data=getData();
  const idx=data.logs.findIndex(l=>l.habitId===habitId&&l.date===date);

  if(idx===-1){
    data.logs.push({habitId,date,status:"done"});
  }else{
    const current=data.logs[idx].status;

    if(current==="done"){
      data.logs[idx].status="skip";
    }else{
      data.logs.splice(idx,1);
    }
  }

  saveData(data);
}

export function isCompleted(habitId:string,date:string){
  return getData().logs.some(l=>l.habitId===habitId&&l.date===date&&l.status==="done");
}

export function isSkipped(habitId:string,date:string){
  return getData().logs.some(l=>l.habitId===habitId&&l.date===date&&l.status==="skip");
}

export function getCountByDate(date:string){
  const logs=getLogs();
  return logs.filter(l=>l.date===date&&l.status==="done").length;
}