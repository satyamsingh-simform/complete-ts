import type { Habit } from "../models/habbitModel";
import type { HabitLog } from "../models/logModel";

type StorageData={
    habits:Habit[];
    logs:HabitLog[]
};

const KEY="habit-tracker";

export function getData():StorageData{
    const raw=localStorage.getItem(KEY);
    if(!raw) return {habits:[],logs:[]};
    return JSON.parse(raw);
}

export function saveData(data:StorageData){
    localStorage.setItem(KEY,JSON.stringify(data));
}