const topImage=document.querySelector<HTMLImageElement>('.top-img');
const rangeSlider=document.querySelector<HTMLInputElement>('.range-slider');
const scrollLine=document.querySelector<HTMLElement>('.scroll-line');
const icon=document.querySelector<HTMLElement>('.icon');

rangeSlider?.addEventListener('input',(e:InputEvent)=>{
    if(e.target instanceof HTMLInputElement){
        console.log(e.target.value);
        scrollLine.style.left=e.target.value+'%';
        topImage.style.width=e.target.value+'%';
        icon.style.left=e.target.value+'%';
    }
})