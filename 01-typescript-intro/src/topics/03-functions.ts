//creacion de funcion tradicional
function addNumber(a: number, b: number): number {
  return a + b;
}

//funcion de flecha
const addNumber2 = (a: number, b: number): string => {
  return `${a + b}`;
};

function multiply(
  firstNumber: number,
  secondNumber?: number,
  base: number = 2
) {
  return firstNumber * base;
}

// const result: number = addNumber(1, 2);
// const result2: string = addNumber2(1, 1);
// const result3: number = multiply(5);
// console.log({ result, result2, result3 });

//finciones con objetos

interface Character {
  name: string;
  hp: number;
  showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {
  character.hp += amount;
};

const strider: Character = {
  name: 'Strider',
  hp: 50,
  showHp() {
    console.log(`Puntos de vida ${this.hp}`);
  },
};

healCharacter(strider, 50);

strider.showHp();

export {};
