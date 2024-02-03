function func(str: string, num: number): void {
  console.log(`str: ${str}, num: ${num}`);
};

func('Hello, world!', 42);

const arrowFunc = (str: string, num: number): void => {
  console.log(`str: ${str}, num: ${num}`);
};
arrowFunc('Hello, world!', 42);

// ?をつけることで、引数を省略できる。?をつける場合は、後半に持ってくる。
const funcQuestion = (str: string, num?: number): void => {
  console.log(num, str);
};
funcQuestion('Hello, world!');

// デフォルトパラメータは?の後ろでもok
const funcDefault = (num?: number, str: string = 'Hello, world!'): void => {
  console.log(num, str);
};
funcDefault();

// 可変長パラメータの場合
const eachNumber = (...items: number[]): void => {
  for (const item of items) {
    console.log(item);
  }
};
eachNumber(1, 2, 3, 4, 5);