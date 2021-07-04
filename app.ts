console.log("TYPESCRIPT");

let foo: number[];

foo = [3, 22];


let aTup:[String, Number, Boolean] = ["S", 22, true];


let person = {
    name: 'Ahmed',
    age: 22
};


function calc(a:number, b:string):void{
    console.log("E: ", b, a + 2);
};

const calca = (d:Number, s:Number) => {
    console.log("Typescript Functions")
};


interface PersonInterface {
    name: String,
    age: Number,
    goo: Boolean
};

let boo: PersonInterface = {
    name: "OMAR",
    age: 22,
    goo: false
}