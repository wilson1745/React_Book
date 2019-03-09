import React from "react";
import PropTypes from "prop-types";

function Button(props) {
  return <button style={{ background: props.color }}>{props.children}</button>;
}

Button.propTypes = {
  color: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};

function Message(props) {
  return (
    <li>
      {props.text} <Button color={props.color}>Delete</Button>
    </li>
  );
}

Message.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

function MessageList() {
  const color = "gray";
  const messages = [{ text: "Hello React" }, { text: "Hello Redux" }];
  const children = messages.map((message, key) => (
    <Message key={key} text={message.text} color={color} />
  ));
  return (
    <div>
      <p>通過props將color逐層傳遞給裡面的Button組件</p>
      <ul>{children}</ul>
    </div>
  );
}

export default MessageList;
