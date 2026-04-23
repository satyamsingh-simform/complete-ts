// game-data.ts

// State type
type GameState = {
  first: HTMLElement | null;
  second: HTMLElement | null;
  lock: boolean;
  move: number;
  sec: number;
};

export const state: GameState = {
  first: null,
  second: null,
  lock: false,
  move: 0,
  sec: 0
};

// emojis
export let arrEmojis: string[] = ["😀","😀","🥳","🥳","🎁","🎁","🎊","🎊","🎈","🎈","👏","👏","🏆","🏆","🐇","🐇"];

export function shuffleEmojis(): string[] {
  return arrEmojis.sort(() => Math.random() - 0.5);
}

export function resetFunc(): void {
  state.first = null;
  state.second = null;
  state.lock = false;
}

export function totalMove(moveDetail: HTMLElement): void {
  state.move++;
  moveDetail.innerHTML = `<strong>Total Move:${state.move}</strong>`;
}

export function checkWin(all_P:NodeListOf<HTMLElement>,clear:number,msg:HTMLElement): void{
  let count = 0;

  all_P.forEach((p) => {
    if (p.classList.contains("matched")) {
      count++;
    }
  });

  if (count === 16) {
    clearInterval(clear);
    msg.innerHTML = `<strong class="won">YOU WON</strong>`;
  }
}