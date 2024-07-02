import React, { useEffect, useState } from "react";
import Select from "./Select";
var keyEvent;
window.addEventListener("keydown", (e) => {
  keyEvent(e);
});
const TypingBoard = ({ basicText, selText }) => {
  console.log("typingBoard render")
  const [totalChr, setTotalChr] = useState(0);
  const [time, setTime] = useState(30);
  const [minRate, setMInRate] = useState(1);
  const [secRate, setSecRate] = useState(1);
  const [errorNum, setErrorNum] = useState(0)
  const [correcNum, setCorrecNum] = useState(0)
  const [wordNum, setWordNum] = useState(0);
  const [wordFlag, setWordFlag] = useState(true);
  const [typingNum, setTypingNum] = useState(0);
  const [text, setText] = useState("");
  const [timer, setTimer] = useState(null);
  const speCar = [" ", ",", ".", "/", ";", "'", ":", '"', "\\", "-", "+", "="];
  const textList = [
    { value: 0, text: "Text 1" },
    { value: 1, text: "Text 2" },
    { value: 2, text: "Text 3" },
    { value: 3, text: "Text 4" },
    { value: 4, text: "Text 5" },
  ];
  const timeList = [
    { value: 30, text: "30s" },
    { value: 45, text: "45s" },
    { value: 60, text: "1min" },
    { value: 90, text: "1.5min" },
    { value: 120, text: "2min" },
  ];
  console.log(minRate)

  const restart = () => {
    let textId = document.getElementById("textSel").value;
    console.log(textId)
    selText(textId)
  }
  // initialize TypingBoard when the typing text changes
  useEffect(() => {
    let textBoard;
    if (textBoard = document.getElementById("text-board")) {
      textBoard.innerHTML = '';
    }
    if (textBoard = document.getElementById("Typing-board")) {
      textBoard.innerHTML = '';
    }
    setText(basicText);
    setTotalChr(basicText.length)
  }, [basicText]);

  // initialize basictext to textBoard by <span>
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

  //time calculation
  useEffect(() => {
    if (time === 0) {
      console.log(time)
      // alert("end");
      document.getElementById("modal").style.display = "block"
      clearInterval(timer);
      window.removeEventListener("keydown", () => { keyEvent(e) })
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

  // main action when keydown event occured
  keyEvent = (e) => {
    if (typingNum == text.length || time == 0) {
      // alert("end");
      document.getElementById("modal").style.display = "block"
      clearTimeout(timer);
      window.removeEventListener("keydown", (e) => { keyEvent(e) })
    }
    if (typingNum < text.length && time > 0) {

      if (
        (e.keyCode > 48 && e.keyCode < 91) ||
        speCar.includes(e.key) ||
        e.keyCode == 32
      ) {

        if (typingNum == 0) {
          setTimer('');
          setTime((prev) => prev - 1);
          setMInRate(time / 60);
          setSecRate(time)
        }
        console.log(typingNum)

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
    }
  };


  return (
    <div className="relative p-10 bg-gray-200 rounded-md">
      <div className="flex justify-between px-5">
        <div className="flex flex-col">
          <div>
            <div className="text-sm py-1 w-40">Select the text</div>
            <Select id="textSel" list={textList} onChange={selText} />
          </div>
          <div>
            <div className="text-sm py-1">Input the time</div>
            <Select id="timeSel" list={timeList} onChange={setTime} />
            {/* <input className="w-32 rounded-sm outline-none" value={time} onClick={(e) => setTime(e.target.value)}></input> */}
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="text-4xl text-center">{time}</div>
          <div className="flex">
            {/* <div className="text-xl mr-3">
              <div className="text-xl text-center">{Math.round(wordNum * 100 / minRate) / 100} words / min</div>
            </div>
            <div className="text-xl"><div className="text-xl text-center">{Math.round(correcNum * 100 / secRate) / 100} chars / sec</div>
            </div> */}
            <button className="bg-blue-600 text-white px-5 py-2 text-xl text-center rounded-md" onClick={restart}>Restart</button>
          </div>

        </div>
        <div className="flex flex-col justify-between w-40 pt-3">
          <div className="flex justify-between text-xl">Total : <div>{totalChr}</div></div>
          <div className="flex justify-between text-xl">Corrects :<div>{correcNum}</div></div>
          <div className="flex justify-between text-xl">Errors :<div>{errorNum}</div></div>
        </div>
      </div>
      <div
        id="text-board"
        className="flex flex-wrap content-start bg-white h-2/5 mt-5 p-3 text-gray-600 rounded-md  text-3xl overflow-auto">

      </div>
      <div
        id="Typing-board"
        className="flex flex-wrap content-start bg-white h-2/5 mt-5 p-3 rounded-md text-3xl overflow-auto ">
      </div>
      <div id="modal" className="w-full h-full pt-[150px] bg-gray-600 bg-opacity-50 fixed top-0 left-0 hidden ">
        <div className="w-1/2 bg-white rounded-xl shadow-xl shadow-gray-500  m-auto p-5 z-10">
          <div className="text-3xl text-gray-500 text-center">Congratulation!</div>
          <div className="flex flex-col p-5 text-gray-500 text-center">
            <div className="w-3/5 m-auto flex flex-col justify-between">
              <div className="flex justify-between text-center mt-1">Total Typing: <div>{typingNum} chrs</div> </div>
              <div className="flex justify-between text-center mt-1">Corrects:<div>{correcNum} chars</div> </div>
              <div className="flex justify-between text-center mt-1">Errors:<div>{errorNum} chars</div> </div>
              <div className="flex justify-between text-center mt-1">Accurate:<div>{Math.round(correcNum * 100 / (correcNum + errorNum))} %</div> </div>
              <div className="flex justify-between text-center mt-1">Word per min:<div>{Math.round(wordNum * 100 / minRate) / 100} words / min</div> </div>
              <div className="flex justify-between text-center mt-1">Chars per sec:<div>{Math.round(correcNum * 100 / secRate) / 100} chars / sec</div> </div>
            </div>
            <button className="bg-gray-400 rounded-md mt-3 text-center px-5 py-2 hover:bg-gray-500 text-white" onClick={() => {
              document.getElementById("modal").style.display = "none";
            }}>O K</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypingBoard;
