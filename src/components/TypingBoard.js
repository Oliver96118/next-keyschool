import React, { useEffect, useState } from "react";
import Select from "./Select";
var keyEvent;
window.addEventListener("keydown", (e) => {
  keyEvent(e);
});
const TypingBoard = ({ basicText, selText, level, levelUp }) => {
  console.log("typingBoard render")
  const [totalChr, setTotalChr] = useState(0);
  const [mode, setMode] = useState(true);
  const [passFlag, setPassFlag] = useState(false);
  const [time, setTime] = useState(30);
  const [minRate, setMInRate] = useState(1);
  const [secRate, setSecRate] = useState(30);
  const [errorNum, setErrorNum] = useState(0)
  const [correcNum, setCorrecNum] = useState(0)
  const [wordNum, setWordNum] = useState(0);
  const [wordFlag, setWordFlag] = useState(true);
  const [typingNum, setTypingNum] = useState(1);
  const [text, setText] = useState("");
  const [timer, setTimer] = useState(null);
  const speCar = [" ", ",", ".", "/", ";", "'", ":", '"', "\\", "-", "+", "="];
  const textList = [
    { value: 0, text: "Text 1" },
    { value: 1, text: "Text 2" },
    { value: 2, text: "Text 3" },
    { value: 3, text: "Text 4" },
    { value: 4, text: "Text 5" },
    { value: 5, text: "Text 6" },
    { value: 6, text: "Text 7" },
    { value: 7, text: "Text 8" },
    { value: 8, text: "Text 9" },
    { value: 9, text: "Text 10" },
  ];
  const timeList = [
    { value: 30, text: "30s" },
    { value: 30, text: "30s" },
    { value: 45, text: "45s" },
    { value: 45, text: "45s" },
    { value: 45, text: "45s" },
    { value: 60, text: "1min" },
    { value: 60, text: "1min" },
    { value: 60, text: "1min" },
    { value: 90, text: "1.5min" },
    { value: 90, text: "1.5min" },
    { value: 120, text: "2min" },
  ];
  // console.log(minRate)
  // console.log(mode);
  // console.log(passFlag)
  console.log(time)
  const restart = () => {
    document.getElementById("Typing-board").innerHTML = "";
    if (document.getElementById(typingNum - 1))
      document.getElementById(typingNum - 1).classList.remove("bg-blue-300")
    setPassFlag(false)
    setTypingNum(1);
    setErrorNum(0);
    setCorrecNum(0);
    setWordNum(0);
    setTime(timeList[level].value);
    clearTimeout(timer)
    setTimer(null);
    setSecRate(time);
  }

  const closeModal = () => {
    console.log("close modal")
    document.getElementById("modal").style.display = "none";
    if (typingNum == text.length) levelUp();
    restart();
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
    restart();
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

      document.getElementById("modal").style.display = "block";
      clearInterval(timer);
      if (typingNum == text.length) {
        // levelUp();
      }
      window.removeEventListener("keydown", () => { keyEvent(e) })
      setTimer(null);
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

    // decide if typing is done or time is up
    console.log(typingNum)
    if (typingNum == text.length || time == 0) {

      document.getElementById("modal").style.display = "block";
      clearTimeout(timer);
      if (typingNum == text.length) {
        // levelUp();
      }
      window.removeEventListener("keydown", (e) => { keyEvent(e) });
    }

    if (typingNum == text.length - 1) {
      setPassFlag(true);
    }
    //if typing is available
    if (typingNum < text.length && time > 0) {
      // console.log(e.key)


      if (
        (e.keyCode > 48 && e.keyCode < 91) ||
        speCar.includes(e.key) ||
        e.keyCode == 32
      ) {
        // initial setting
        if (time == secRate) {
          document.getElementById("modal").addEventListener("keydown", (e) => {
            if (e.key == " " || e.key == "Enter") {
              closeModal();
            }
          })
          setTimer('');
          setTime((prev) => prev - 1); //trigger timing action
          setMInRate(time / 60);

        }

        var key = e.key;
        // refuse error in NoError mode
        if (key != text[typingNum - 1]) {
          setErrorNum(prev => prev + 1);
          if (mode) return;
        }

        setTypingNum((prev) => prev + 1);
        console.log(typingNum)


        // follow typing character in "text-board"
        var curSpanClass = null;
        const preSpanClass = document.getElementById(typingNum - 1).classList;
        if (typingNum == text.length) { curSpanClass = document.getElementById(typingNum - 1).classList; }
        else { curSpanClass = document.getElementById(typingNum).classList; }
        preSpanClass.remove("bg-blue-300");
        curSpanClass.add("bg-blue-300");

        // create <span> tag to "typing board"
        const TypingBoard = document.getElementById("Typing-board");
        const span = document.createElement("span");
        const textnode = document.createTextNode(key);
        span.appendChild(textnode);
        const list = span.classList;

        // check if typed char is correct
        if (key != text[typingNum - 1]) {
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
          <div className="flex items-center justify-between py-1">
            <label>NoError Mode</label>
            <input type="checkbox" checked={mode} className="w-4 h-4" onChange={() => setMode(!mode)}></input>
          </div>
          <div>
            <div className="text-sm py-1 w-40">Select the text</div>
            <Select id="textSel" list={textList} cur={level} onChange={selText}/>
          </div>
          <div>
            <div className="text-sm py-1">Input the time</div>
            <Select id="timeSel" list={timeList} cur={level} onChange={setTime}/>
          </div>

        </div>
        <div className="flex flex-col justify-between">
          <div className="text-4xl text-center">{time}</div>
          <div className="flex">
            <button className="bg-blue-600 text-white px-5 py-2 text-xl text-center rounded-md mr-2" onClick={restart}>Restart</button>
            <button className="bg-blue-600 text-white px-5 py-2 text-xl text-center rounded-md" onClick={levelUp}>Level Up</button>
          </div>
        </div>
        <div className="flex flex-col justify-between w-40 pt-3">
          <div className="text-2xl py-2">Level : {level}</div>
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
          <div className="text-3xl text-gray-500 text-center">
            {passFlag ? <div>{level == 10 ? <div>Congraturation!</div> : ""}You passed!</div>
              : <div>You lose!</div>}
          </div>
          <div className="flex flex-col p-5 text-gray-500 text-center">
            <div className="w-3/5 m-auto flex flex-col justify-between">
              <div className="flex justify-between text-center mt-1">Total Typing: <div>{typingNum} chrs</div> </div>
              <div className="flex justify-between text-center mt-1">Corrects:<div>{typingNum - errorNum} chars</div> </div>
              <div className="flex justify-between text-center mt-1">Errors:<div>{errorNum} chars</div> </div>
              <div className="flex justify-between text-center mt-1">Accurate:<div>{Math.round(correcNum * 100 / (correcNum + errorNum))} %</div> </div>
              <div className="flex justify-between text-center mt-1">Word per min:<div>{Math.round(wordNum * 100 / minRate) / 100} words / min</div> </div>
              <div className="flex justify-between text-center mt-1">Chars per sec:<div>{Math.round(correcNum * 100 / secRate) / 100} chars / sec</div> </div>
            </div>
            <button className="bg-gray-400 rounded-md mt-3 text-center px-5 py-2 hover:bg-gray-500 text-white" onKeyDown={closeModal} onClick={closeModal}>O K</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypingBoard;
