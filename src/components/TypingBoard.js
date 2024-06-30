import React, { useEffect, useState } from "react";
var keyEvent;
window.addEventListener("keydown", (e) => {
  keyEvent(e);
});
const TypingBoard = () => {
  const [total, setTotal] = useState();

  const [newTyping, setNewTyping] = useState("");
  const [typingNum, setTypingNum] = useState(0);
  const speCar = [" ", ",", ".", "/", ";", "'", ":", '"', "\\"];
  const [text, setText] = useState(
    "The selector points to the HTML element you want to style. The declaration block contains one or more declarations separated by\
  semicolons. Each declaration includes a CSS property name and a value,\
  separated by a colon. Multiple CSS declarations are separated with\
  semicolons, and declaration blocks are surrounded by curly braces"
  );
  // console.log(typingNum);
  // console.log(text[typingNum]);
  keyEvent = (e) => {
    // console.log(e);
    if (
      (e.keyCode > 48 && e.keyCode < 91) ||
      speCar.includes(e.key) ||
      e.keyCode == 32
    ) {
      var key = e.key;
      // if(e.keyCode == 32) key = "&nbsp;"
      setTypingNum((prev) => prev + 1);
      const curSpan = document.getElementById(typingNum);
      console.log(typingNum);
      console.log(curSpan);
      curSpan.focus();
      const TypingBoard = document.getElementById("Typing-board");
      const span = document.createElement("span");
      const textnode = document.createTextNode(key);
      span.appendChild(textnode);
      const list = span.classList;
      console.log(e.key);
      console.log(text[typingNum]);
      if (key != text[typingNum]) {
        list.add("text-red-500");
      }
      if (key == " ") list.add("w-2");
      TypingBoard.appendChild(span);
      // setNewTyping(prev => {
      //   return prev + `<span>${key}</span>`;
      // });
    }
  };
  useEffect(() => {
    const textBoard = document.getElementById("text-board");

    for (let i = 0; i < text.length; i++) {
      const span = document.createElement("span");
      const list = span.classList;
      list.add("focus:bg-blue-300");
      if (text[i] == " ") list.add("w-2");
      const textnode = document.createTextNode(text[i]);
      span.appendChild(textnode);
      span.id = i;
      textBoard.appendChild(span);
    }
  }, []);
  return (
    <div className="relative m-10 p-10 bg-gray-200 rounded-md">
      <button className="bg-blue-200  focus:bg-blue-700">focus Btn</button>
      {/* <span className="bg-blue-400">sdfs</span> */}
      <div>sdfsfd&nbsp;</div>
      <div
        id="text-board"
        className="flex flex-wrap bg-white  h-2/5 p-3 text-gray-600 rounded-md  text-3xl focus:bg-blue-500"></div>
      <div
        id="Typing-board"
        className="flex flex-wrap bg-white h-2/5 mt-5 p-3 rounded-md text-3xl z-0">
        {newTyping}
      </div>
    </div>
  );
};

export default TypingBoard;
