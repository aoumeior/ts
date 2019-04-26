let myAdd: (x: number, y: number) => number =
    function(x: number, y: number): number { return x + y; };


// 按上下文归类

// myAdd has the full function type
let myAdd1 = function(x: number, y: number): number { return x + y; };

// The parameters `x` and `y` have the type number
let myAdd2 : (baseValue: number, increment: number) => number =
    function(x, y) { return x + y; };


// 剩余参数

function buildName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
    }
  
let buildNameFun: (fname: string, ...rest: string[]) => string = buildName;