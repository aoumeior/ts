
// boolean
let  isDone : boolean = false;


// number

let decLteral : number = 6;

let hexLiteral : number = 0xf00d;

let binaryLiteral : number = 0b1010;

let octalLteral : number = 0o744;

// string

let _name : string = 'bobo';

_name = 'smith';


let CompanyName = `hua han yun`;

let CompanyAge = 1;

console.log(`${CompanyName} is ${ CompanyAge +1 } years old`);

// array

let numberlist : number[] = [1,2,3,4];

let numberlist1 : Array<number> = [1, 2, 3];

// tuply

let x : [number , string] =[1, 'a'];

// enum

enum Color { Red = "1", Green = "2", Blue = "3" }

let BackgroundColor : Color = Color.Blue;

// Any

let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;
console.log( typeof notSure )

// void 

function warnUser(): void {
    console.log("This is my warning message");
}

let unusable : void = undefined;
unusable = null;

// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;