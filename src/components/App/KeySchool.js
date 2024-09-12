import React, { useCallback, useState } from "react";
import TypingBoard from "../TypingBoard";

const KeySchool = () => {
  const textlist = [
    "fly relate house expert charge interview itself because job consider knowledge",
    "significant understand business home where entire tonight want heavy such sell way employee by civil hold executive become",
    "enough task exactly reflect about fear let perform term always industry spend feeling play federal performance season major buy ability evidence treat wall",
    "especially say size fast really activity final use strategy maintain see add explain conference school line almost economy rise various claim range imagine their central watch art",
    "light concern pick coach make chair suddenly information show rock pretty ready hang finally music cold join professional later though series head college building career consumer everyone sure area maybe",
    "score rest card also bring begin movement moment material night reduce these live condition yeah food than morning city speak enjoy laugh teacher cell health well summer player interesting might subject movie themselves price trip address",
    "HTML is the standard markup language for Web pages. With HTML you can create your own Website. HTML stands for Hyper Text Markup Language. CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed.This tutorial will teach you CSS from basic to advanced.",
    "If you've previously installed create-react-app globally, it is recommended that you uninstall the package to ensure npx always uses the latest version of create-react-app. To uninstall, run this command: npm uninstall -g create-react-app The React useState Hook allows us to track state in a function component. State generally refers to data or properties that need to be tracking in an application.",
    "A class component must include the extends React.Component statement. This statement creates an inheritance to React.Component, and gives your component access to React.Component's functions. Create React App doesn't include page routing. React Router is the most popular solution.The useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these! We could create multiple state Hooks to track individual values.",
    "A Function component also returns HTML, and behaves much the same way as a Class component, but Function components can be written using much less code, are easier to understand, and will be preferred in this tutorial. Props are arguments passed into React components. props are passed to components via HTML attributes. Because we need the current value of state, we pass a function into our setCar function. This function receives the previous value. We then return an object, spreading the previousState and overwriting only the color.",
    "Java is a popular programming language. Java is used to develop mobile apps, web apps, desktop apps, games and much more. Java is an object oriented language and some concepts may be new. Take breaks when needed, and go over the examples as many times as needed."
  ];
  const timeList = [
    { value: 20, text: "20s" },
    { value: 20, text: "20s" },
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
  const [curText, setCurText] = useState(textlist[0]);
  const [level, setLevel] = useState(1);
  const [tryNum, setTryNum] = useState(0)
  // console.log(tryNum)
  const levelUp = useCallback(() => {
    console.log("levelUp")
    if (level < 10) {
      setLevel(prev => prev + 1);
      setCurText(textlist[level]);
    }
  }, [level])
  const levelDown = useCallback(() => {
    console.log("levelDown")
    if (level > 1) {
      setLevel(prev => prev - 1);
      setCurText(textlist[level-2]);
    }
  }, [level])
  const selText = (n) => {
    setCurText(textlist[n]);
  };
  return (
    <div className="bg-green-300 w-full h-full">
      {/* {console.log(curText)} */}
      <TypingBoard basicText={curText} selText={selText} level={level} levelUp={levelUp} levelDown={levelDown}/>
    </div>
  );
};

export default KeySchool;
