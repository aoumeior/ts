// 解构

let input : [number, number]= [1, 2]

let [first , second] = input;

[second, first] = [first, second];


function f([first, second]: [number, number]) {
    console.log(first);
    console.log(second);
}
f(input);




let [begin, ...rest] = [1, 2, 3, 4];
console.log(begin); // outputs 1
console.log(rest); // outputs [ 2, 3, 4 ]


// only
let [only] = [1, 2, 3, 4];
console.log(only); // outputs 1

let [, second_, , fourth] = [1, 2, 3, 4];


// 对象解构

let o = {
    a: "foo",
    b: 12,
    c: "bar"
};
let { a, b } = o;

// ...语法创建剩余变量：

let { c, ...passthrough } = o;
let total = passthrough.b + passthrough.a.length;

