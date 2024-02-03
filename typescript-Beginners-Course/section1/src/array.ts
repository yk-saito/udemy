const array1: string[] = ['a', 'b', 'c'];
array1.push('d');

// ユニオン型
const array2: (string | number)[] = ['a', 1, 2, 'b', 3];

// タプル型
const array3: [string, number, boolean] = ['a', 1, true];