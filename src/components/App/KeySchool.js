import React, { useCallback, useState } from "react";
import TypingBoard from "../TypingBoard";

const KeySchool = () => {
  const textlist = ["HTML is the standard markup language for Web pages. With HTML you can create your own Website. ",
    "CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed.This tutorial will teach you CSS from basic to advanced.",
    "JavaScript is the world's most popular programming language. JavaScript is the programming language of the Web. JavaScript is easy to learn. This tutorial will teach you JavaScript from basic to advanced.",
    "If you've previously installed create-react-app globally, it is recommended that you uninstall the package to ensure npx always uses the latest version of create-react-app. To uninstall, run this command: npm uninstall -g create-react-app The React useState Hook allows us to track state in a function component. State generally refers to data or properties that need to be tracking in an application.",
    "In older React code bases, you may find Class components primarily used. It is now suggested to use Function components along with Hooks, which were added in React 16.8. There is an optional section on Class components for your reference. Keys allow React to keep track of elements. This way, if an item is updated or removed, only that item will be re-rendered instead of the entire list.",
    "A class component must include the extends React.Component statement. This statement creates an inheritance to React.Component, and gives your component access to React.Component's functions. Create React App doesn't include page routing. React Router is the most popular solution.The useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these! We could create multiple state Hooks to track individual values.",
    "A Function component also returns HTML, and behaves much the same way as a Class component, but Function components can be written using much less code, are easier to understand, and will be preferred in this tutorial.",

    "Props are arguments passed into React components. props are passed to components via HTML attributes. Because we need the current value of state, we pass a function into our setCar function. This function receives the previous value. We then return an object, spreading the previousState and overwriting only the color.",
    "Many other companies use APIs internally to streamline development on multiple platforms such as iPhone, Android, and Desktop. For example, Facebook and LinkedIn use APIs so that their engineers have access to the same data regardless of what platform they are programming for.",
    "Java is a popular programming language. Java is used to develop mobile apps, web apps, desktop apps, games and much more. Java is an object oriented language and some concepts may be new. Take breaks when needed, and go over the examples as many times as needed."
  ];
  const [curText, setCurText] = useState(textlist[0]);
  const [level, setLevel] = useState(1);
  const [tryNum, setTryNum] = useState(0)
  // console.log(tryNum)
  const levelUp = useCallback(() => {
    if (level < 10) {
      setLevel(prev => prev + 1);
      setCurText(textlist[level]);
    }
  }, [level])
  const selText = (n) => {
    // console.log(n)
    // console.log(textlist)
    setCurText(textlist[n]);
  };
  return (
    <div className="bg-green-500 w-full">
      {/* {console.log(curText)} */}
      <TypingBoard basicText={curText} selText={selText} setTryNum={setTryNum} level={level} levelUp={levelUp} />
    </div>
  );
};

export default KeySchool;
