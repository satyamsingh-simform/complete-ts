import { gameData } from "./game-data";














alert('you have 60 second to complete the game');

let arrEmojis: string[] = ["😀","😀","🥳","🥳","🎁","🎁","🎊","🎊","🎈","🎈","👏","👏","🏆","🏆","🐇","🐇"];
let emojiShufle:string[] = arrEmojis.sort(() => (Math.random() - 0.5));

//DOM type
let all_P = document.querySelectorAll<HTMLElement>('.item');
let reset = document.getElementById('reset') as HTMLButtonElement;
let moveDetail = document.querySelector('.detail') as HTMLElement;
let time = document.querySelector('.time') as HTMLElement;
let msg = document.querySelector('.msg') as HTMLElement;

all_P.forEach((p,index)=>{
    p.innerText=emojiShufle[index];
})

//type
let first: HTMLElement|null = null;
let second: HTMLElement|null = null;
let lock: boolean = false;

let move: number = 0;
let sec: number = 0;

function resetFunc(){
    first=null;
    second=null;
    lock=false;
}

//click logic
all_P.forEach((p)=>{
    p.addEventListener('click',()=>{

        if(lock) return;
        if(p===first) return;

        p.classList.add('flipped')

        if(!first){
            first=p;
        }
        else{
            second=p;
            lock=true;

            //null check
            if(first!.innerText===second!.innerText){
                first!.classList.add('matched');
                second!.classList.add('matched');
                resetFunc();
                checkWin();
                totalMove();
            }
            else{
                setTimeout(()=>{
                    first!.classList.remove('flipped');
                    second!.classList.remove('flipped');
                    resetFunc();
                    totalMove();
                },1000)
            }
        }
    })
})




// reset button
reset.addEventListener('click',()=>{
    location.reload();
})

// timer
let clear = setInterval(()=>{
    sec++;
    time.innerHTML=`<strong>Total time:${sec}</strong>`;
    if(sec==60){
        all_P.forEach((p)=>{
            p.classList.add('disabled');
            msg.innerHTML=`
                <p class="try-again">Try again</p>
                <strong>Time limit hit</strong>
            `
            clearInterval(clear)
        });
    }
},1000)

// win check
function checkWin(){
    let count=0
    all_P.forEach((p)=>{
        if(p.classList.contains('matched')){
            count++
        }
    })
    if(count==16){
        clearInterval(clear);
        msg.innerHTML=`<strong class="won">YOU WON</strong>`
        console.log(`you took total ${move} move to win this game`);
    }
}

// move count
function totalMove(){
    move++;
    moveDetail.innerHTML=`<strong>Total Move:${move}</strong>`;
}