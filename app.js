'use strict';
const number = process.argv[2] || 0;
let sum = 0;
for (let i = 1; i <= number; i++) {
    sum = sum + i;
}
console.log(sum);

// 1からコマンドラインの引数で与えられた数までを合計するプログラム。