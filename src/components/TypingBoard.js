import React, { useEffect, useState } from "react";
import Select from "./Select";
var keyEvent;
window.addEventListener("keydown", (e) => {
  keyEvent(e);
});
const TypingBoard = ({ basicText, selText }) => {
  console.log("typingBoard render")
  const [totalChr, setTotalChr] = useState(0);
  const [time, setTime] = useState(60);
  const [errorNum, setErrorNum] = useState(0)
  const [correcNum, setCorrecNum] = useState(0)
  const [wordNum, setWordNum] = useState(0);
  const [wordFlag, setWordFlag] = useState(true)
  const [typingNum, setTypingNum] = useState(0);
  const [text, setText] = useState("");
  const [timer, setTimer] = useState(null);
  const speCar = [" ", ",", ".", "/", ";", "'", ":", '"', "\\", "-", "+", "="];
  const textList = [
    {
      id: 0,
      text: "Text 1"
    },
    {
      id: 1,
      text: "Text 2"
    },
    {
      id: 2,
      text: "Text 3"
    },
    {
      id: 3,
      text: "Text 4"
    },
    {
      id: 4,
      text: "Text 5"
    },

  ]

  useEffect(() => {
    let textBoard;
    if (textBoard = document.getElementById("text-board")) {
      console.log(textBoard)
      textBoard.innerHTML = '';
    }
    if (textBoard = document.getElementById("Typing-board")) {
      console.log(textBoard)
      textBoard.innerHTML = '';
    }
    setText(basicText);
    setTotalChr(basicText.length)
  }, [basicText]);

  useEffect(() => {
    const textBoard = document.getElementById("text-board");

    for (let i = 0; i < text.length; i++) {
      const span = document.createElement("span");
      const list = span.classList;
      if (text[i] == " ") list.add("w-2");
      if (i == 0) list.add("bg-blue-300");
      const textnode = document.createTextNode(text[i]);
      span.appendChild(textnode);
      span.id = i;
      textBoard.appendChild(span);
    }
  }, [text]);

  useEffect(() => {
    if (time === 0) {
      console.log(time)
      alert("end");
      clearInterval(timer);
      window.removeEventListener("keydown", () =>{ keyEvent})
      setTimer(null)
      // document.getElementById("Typing-board").contentEditable = false;
    }
    if (time > 0 && timer != null) {
      setTimer(
        setTimeout(() => {
          setTime((prev) => prev - 1)
        }, 1000)
      )
    }

  }, [time])

  keyEvent = (e) => {

    if (typingNum == 0) {
      setTimer('');
      setTime((prev) => prev - 1);
    }
    if (
      (e.keyCode > 48 && e.keyCode < 91) ||
      speCar.includes(e.key) ||
      e.keyCode == 32
    ) {
      var key = e.key;
      // if(e.keyCode == 32) key = "&nbsp;"
      setTypingNum((prev) => prev + 1);
      var curSpanClass = null;
      const preSpanClass = document.getElementById(typingNum).classList;
      if (typingNum == text.length) { curSpanClass = document.getElementById(typingNum).classList; }
      else { curSpanClass = document.getElementById(typingNum + 1).classList; }

      preSpanClass.remove("bg-blue-300");
      curSpanClass.add("bg-blue-300");
      const TypingBoard = document.getElementById("Typing-board");
      const span = document.createElement("span");
      const textnode = document.createTextNode(key);
      span.appendChild(textnode);
      const list = span.classList;

      if (key != text[typingNum]) {
        setErrorNum(prev => prev + 1);
        setWordFlag(false);
        list.add("text-red-500");
        if (key == " ") list.add("bg-red-500")
      }
      else { setCorrecNum((prev) => prev + 1); }
      if (key == " ") {
        list.add("w-2");
        if (wordFlag == true) setWordNum((prev) => prev + 1)
        setWordFlag(true);
      }
      TypingBoard.appendChild(span);
    }
  };


  return (
    <div className="relative mx-10 p-10 bg-gray-200 rounded-md">
      <div className="flex justify-between px-5">
        <div className="flex flex-col">
          <div>
            <div className="text-sm py-1">Select the text</div>
            <Select list={textList} onChange={selText} />
          </div>
          <div>
            <div className="text-sm py-1">Input the time(seconds)</div>
            <input className="w-32 rounded-sm outline-none" value={time} onClick={(e) => setTime(e.target.value)}></input>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="text-4xl text-center">{time}</div>
          <div className="flex">
            <div className="text-xl mr-3">
              <div className="text-2xl text-center">{Math.round(wordNum)}</div>words per min</div>
            <div className="text-xl"><div className="text-2xl text-center">{Math.round(correcNum)}</div>chrs per min</div>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="text-xl">Total : {totalChr}</div>
          <div className="text-xl text-blue-600">Corrects : {correcNum}</div>
          <div className="text-xl text-red-600">Errors : {errorNum}</div>
        </div>
      </div>
      <div
        id="text-board"
        className="flex flex-wrap content-start bg-white h-2/5 mt-5 p-3 text-gray-600 rounded-md  text-3xl overflow-auto"></div>
      <div
        id="Typing-board"
        className="flex flex-wrap content-start bg-white h-2/5 mt-5 p-3 rounded-md text-3xl overflow-auto"></div>
    </div>
  );
};

export default TypingBoard;
