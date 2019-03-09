import React, { Component } from "react";

function Demo1() {
  return (
    <li>
      <h3>類似HTML</h3>
      <p data-attribute="demo1">可以嵌套，可以自訂屬性</p>
    </li>
  );
}

function Demo2() {
  const name = "JSX";
  const func = () => {
    let result = "hello ";
    if (name) {
      result += name;
    } else {
      result += "world";
    }
    return result;
  };
  return (
    <li>
      <h3>JavaScript運算式</h3>
      <p>hello {name || "world"}</p>
      <p className={name ? "class-a" : "class-b"}>hello {name && "world"}</p>
      <p>{func()}</p>
    </li>
  );
}

function Demo3() {
  return (
    <li>
      <h3>樣式</h3>
      <p style={{ color: "red", fontSize: "14px" }}>
        內聯樣式不是字串，而是物件
      </p>
    </li>
  );
}

function Demo4() {
  return (
    <li>
      <h3>注釋</h3>
      {/* 注釋... */}
      <p>標籤子節點內的注釋應該寫在大括弧中</p>
    </li>
  );
}

function Demo5() {
  const arr = [
    <h3 key={0}>陣列</h3>,
    <p key={1}>陣列會自動展開。注意，陣列中每一項元素需要添加key屬性</p>
  ];
  return <li>{arr}</li>;
}

export default class Jsx extends Component {
  // eslint-disable-line
  render() {
    return (
      <div>
        <h2>JSX語法</h2>
        <ul>
          <Demo1 />
          <Demo2 />
          <Demo3 />
          <Demo4 />
          <Demo5 />
        </ul>
      </div>
    );
  }
}
