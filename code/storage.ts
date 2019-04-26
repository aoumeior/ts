let passcode = "secret passcode";

class Employor {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}

// 首先，存取器要求你将编译器设置为输出ECMAScript 5或更高。
// 不支持降级到ECMAScript 3。
// 其次，只带有 get不带有 set的存取器自动被推断为 readonly。 
// 这在从代码生成 .d.ts文件时是有帮助的，因为利用这个属性的用户会看到不允许够改变它的值。


let employor = new Employor();
employor.fullName = "Bob Smith";
if (employor.fullName) {
    alert(employor.fullName);
}

