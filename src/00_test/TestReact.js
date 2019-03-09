import React, { Component } from "react";
import { Test } from "mocha";

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
