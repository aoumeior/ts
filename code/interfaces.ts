interface usrinfo {

    name: string,
    age: number,
    sign?: string
}

function PrintUserInof(usrinfo: usrinfo) :void
{
    console.log(usrinfo.name)
    console.log(usrinfo.age)
    if(usrinfo.sign){
        console.log(usrinfo.sign);
    }
}

let myinfo : usrinfo = {name: "aoumeior", age: 16, tag:1} as usrinfo;

PrintUserInof(myinfo);

// readonly

interface Point {

    readonly x : number,
    readonly y : number
}
let p1: Point = { x: 10, y: 20 };




// 函数类型的接口

interface RegisterFunction {

    (userinfo : usrinfo, sign?: string): void;
}

let rgf : RegisterFunction;

rgf = function

// 函数类型不一定要一致，但一定要兼容，形参名不一定要一致
(usr : usrinfo, s: string): void
{

}

// 索引签名

interface StringArray {
    [index: number]: string,
    name: string,
  }
  
  let myArray: StringArray = {name: "1", 1:"1"};



//  类类型

interface ClockInterface {
    currentTime: Date;
    setTime(d: Date) : void;
}

class Clock implements ClockInterface {
    currentTime: Date;
    setTime(d: Date) :void {
        this.currentTime = d;
    }
    constructor(h: number, m: number) { }
}




  