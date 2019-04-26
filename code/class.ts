class Animal{
    private name_ : string;
    constructor(name : string){
        this.name_ = name;
    }
    move(distanceInMeters: number = 0){
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}

class Dog extends Animal {

    constructor(name : string){
        super(name);
    }

    move(distanceInMeters: number = 0){
        console.log(`Dog moved ${distanceInMeters}m.`);
    }
    bark() {
        console.log('Woof! Woof!');
        super.move(1);
    }
}

const dog = new Dog(`dog`);
dog.bark();
dog.move(10);
dog.bark();

// 当我们比较带有 private或 protected成员的类型的时候，情况就不同了。
// 如果其中一个类型里包含一个 private成员，那么只有当另外一个类型中也存在这样一个 private成员， 并且它们都是来自同一处声明时，
// 我们才认为这两个类型是兼容的。 对于 protected成员也使用这个规则。

class Rhino extends Animal {
    constructor() { super("Rhino"); }
}

class Employee {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

let animal = new Animal("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");

animal = rhino;
// animal = employee; // 错误: Animal 与 Employee 不兼容.

// 成员被标记成 private时，它就不能在声明它的类的外部访问。
// protected修饰符与 private修饰符的行为很相似，但有一点不同， protected成员在派生类中仍然可以访问。

