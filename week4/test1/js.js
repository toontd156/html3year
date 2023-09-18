"usw strict";
const a = 'hello'
const b = 1;
const c = 3.14;
const d = true;
const e = b+c;
const f = 'Sum '+ e.toFixed(2) + 'baht';
// alert(f);

function sum(a,b) {
    return a+b;
}

const sumtwo = (a,b) => {
    return a+b;
}

const sumthree = (a,b) => a+b;

let total = 0;

let score = [1,2,3];

let max = score[0]

for(let i = 1; i < score.length; i++) {
    if (max < score[i]) {
        max = score[i];
    }
}

score.forEach((s) =>{
    if (max < s ) {
        max = s;
    }
})