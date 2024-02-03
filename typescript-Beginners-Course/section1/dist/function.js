function func(str, num) {
    console.log(`str: ${str}, num: ${num}`);
}
;
func('Hello, world!', 42);
const arrowFunc = (str, num) => {
    console.log(`str: ${str}, num: ${num}`);
};
arrowFunc('Hello, world!', 42);
// ?をつけることで、引数を省略できる。?をつける場合は、後半に持ってくる。
const funcQuestion = (str, num) => {
    console.log(num, str);
};
funcQuestion('Hello, world!');
// デフォルトパラメータは?の後ろでもok
const funcDefault = (num, str = 'Hello, world!') => {
    console.log(num, str);
};
funcDefault();
// 可変長パラメータの場合
const eachNumber = (...items) => {
    for (const item of items) {
        console.log(item);
    }
};
eachNumber(1, 2, 3, 4, 5);
//# sourceMappingURL=function.js.map