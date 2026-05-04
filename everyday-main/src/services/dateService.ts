export function getDates(range:number):string[]{
  const res:string[]=[];
  const today=new Date();

  for(let i=-range;i<=range;i++){
    const d=new Date();
    d.setDate(today.getDate()+i);
    res.push(d.toISOString().split("T")[0]);
  }

  return res;
}

export function formatDate(date:string){
  const d=new Date(date);
  return{
    month:d.toLocaleString("default",{month:"short"}),
    day:d.getDate(),
    weekday:d.toLocaleString("default",{weekday:"short"})
  };
}

export function isToday(date:string){
  return new Date().toISOString().split("T")[0]===date;
}