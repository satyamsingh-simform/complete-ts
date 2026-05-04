export function getElementById<T extends HTMLElement>(id:string):T{
  const el=document.getElementById(id);
  if(!el) throw new Error(`Element not found:${id}`);
  return el as T;
}

export function createElement<K extends keyof HTMLElementTagNameMap>(tag:K,className?:string,text?:string):HTMLElementTagNameMap[K]{
  const el=document.createElement(tag);
  if(className) el.className=className;
  if(text) el.textContent=text;
  return el;
}

export function clearElement(el:HTMLElement){el.innerHTML="";}

export function appendChildren(parent:HTMLElement,children:HTMLElement[]){
  children.forEach(c=>parent.appendChild(c));
}