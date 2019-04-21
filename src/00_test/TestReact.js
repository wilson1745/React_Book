import React, { Component } from "react";
import { Test } from "mocha";
//import { aString, aObject, aFunction, aClass } from "./components/lib";
import * as MyModule from "./components/lib";

const sum = function(a, b) {
  return a + b;
};
const sum2 = (a, b) => a + b;
const newValue = sum(100, 1);
console.log("newValue ", newValue);
console.log("sum(99, 1) ", sum(99, 1));
console.log("sum(55, 1) ", sum2(55, 1));

const aArray = [1, 2, 3];
let x = aArray.length > 0 && 100;
console.log("x ", x);

const emtyObject = {};
const player = {
  fullName: "Inori",
  age: 16,
  gender: "girl",
  hairColor: "pink",
  sing: function() {
    console.log("lalala");
  }
};
console.log("player ", player);

const bArray = [];
const bObject = {};
const cArray = ["foo", "bar"];
const cObject = { fistKey: "foo", seconKey: "bar" };
bArray[2] = "yes";
bObject.thirdKey = "yes";
console.log("bArray[2] ", bArray[2]);
console.log("bObject.thirdKey ", bObject.thirdKey);
console.log("bObject ", bObject);
cObject.thirdKey = "yes";
console.log("cObject ", cObject);

const playerFun = {
  fullName: "Eddy",
  sayName(word = "Hi") {
    console.log(word + " " + this.fullName);
  }
};

playerFun.sayName();
playerFun.sayName("Hello Test");

class TestReact {
  constructor(fullName, age, gender, hairColor) {
    this.fullName = fullName;
    this.age = age;
    this.gender = gender;
    this.hairColor = hairColor;
  }

  toString() {
    return "Name: " + this.fullName + ", Age: " + this.age;
  }
}
const inori = new TestReact("Inori", 16, "girl", "pink");
console.log(inori.toString());
console.log(inori.fullName);

const { user: x1 } = { user: 5 };
console.log("x1 ", x1);

const {
  prop: x2,
  prop2: {
    prop2: {
      nested: [, , b]
    }
  }
} = { prop: "Hello", prop2: { prop2: { nested: ["a", "b", "c"] } } };
console.log("x2, b", x2, b);

console.log("MyModule ", MyModule.aString);
console.log("MyModule ", MyModule.aObject);
MyModule.aFunction();
const newObject = new MyModule.aClass("Inory", 16);
console.log("MyModule ", newObject);

const data = [2, 4, 8, 7];
const result_map = data.map(function(value, arg, array) {
  console.log("function ", "value ", value, "arg ", arg, "array ", array);
  return value * value;
});
console.log("result_map ", result_map);
const result_some = data.some(function(value, index, array) {
  return value % 3 === 0;
});
console.log("result_some ", result_some);
const result_filter = data.filter(function(value, index, array) {
  return value % 3 === 1;
});
console.log("result_filter ", result_filter);
const data2 = [5, 25, 10];
let result_sort = data2.sort();
console.log("result_sort ", result_sort);
result_sort = data2.sort(function(x, y) {
  return x - y;
});
console.log("result_sort ", result_sort);
const classes = ["部長", "課長", "主任", "組長"];
const members = [
  { name: "Wilson", clazz: "課長" },
  { name: "Sybil", clazz: "部長" },
  { name: "Jack", clazz: "組長" },
  { name: "Lily", clazz: "主任" }
];
console.log(
  "members.sort ",
  members.sort(function(x, y) {
    return classes.indexOf(x.clazz) - classes.indexOf(y.clazz);
  })
);
let m = new Map([["dog", "woman"], ["cat", "man"], ["mouse", "gay"]]);
for (let key of m.keys()) {
  console.log(key);
}
for (let value of m.values()) {
  console.log(value);
}
for (let [key, value] of m) {
  console.log(key, value);
}

const json = JSON.parse('{"hoge": 1, "foo": 2}');
console.log("JSON.parse ", json.hoge);
console.log(JSON.stringify(json));

function sumExtract(...nums) {
  let result = 0;
  for (let num of nums) {
    result += num;
  }
  return result;
}
console.log("sumExtract ", sumExtract(1, 3, 5, 7, 9));

let value = [];
let combine = [
  ...value,
  "推廣電子權益",
  "推廣電子帳單",
  "確認預借現金",
  "推廣中華電信代扣繳"
].sort();
console.log("combine ", combine);
var pets = ["cat", "dog", "bat"];
console.log("pets.includes(cat) ", pets.includes("cat"));

const funcB = x => {
  return x + 1;
};
console.log("return x + 1 ", funcB(6));
const funcC = x => {
  x + 1;
};
console.log("return x + 1 ", funcC(6)); // undefined

const calculate = {
  array: [1, 2, 3],
  sum: () => {
    return array.reduce((result, item) => result + item);
  }
};
console.log(calculate.sum());

/*class TestReact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //todos
    };
  }

  render() {
    return (
      <div>
        <h1>React Test</h1>
      </div>
    );
  }
}

export default TestReact;*/
