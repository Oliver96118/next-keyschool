import React, { useState } from "react";
import TypingBoard from "../TypingBoard";

const KeySchool = () => {
  const textlist = [
    "If you've previously installed create-react-app globally, it is recommended that you uninstall the package to ensure npx always uses the latest version of create-react-app. To uninstall, run this command: npm uninstall -g create-react-app The React useState Hook allows us to track state in a function component. State generally refers to data or properties that need to be tracking in an application.",
    "In older React code bases, you may find Class components primarily used. It is now suggested to use Function components along with Hooks, which were added in React 16.8. There is an optional section on Class components for your reference. Keys allow React to keep track of elements. This way, if an item is updated or removed, only that item will be re-rendered instead of the entire list.",
    "A class component must include the extends React.Component statement. This statement creates an inheritance to React.Component, and gives your component access to React.Component's functions. Create React App doesn't include page routing. React Router is the most popular solution.The useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these! We could create multiple state Hooks to track individual values.",
    "A Function component also returns HTML, and behaves much the same way as a Class component, but Function components can be written using much less code, are easier to understand, and will be preferred in this tutorial.",
    "Props are arguments passed into React components. props are passed to components via HTML attributes. Because we need the current value of state, we pass a function into our setCar function. This function receives the previous value. We then return an object, spreading the previousState and overwriting only the color.",
  ];
  const [curText, setCurText] = useState(textlist[0]);
  const [level, setLevel] = useState(0);
  const [tryNum, setTryNum] = usestate(0)
  const selText = (n) => {
    console.log(n)
    // console.log(textlist)
    setCurText(textlist[n]);
  };
  return (
    <div className="bg-green-500 w-full">
        {/* {console.log(curText)} */}
      <TypingBoard basicText={curText} selText={selText} />
    </div>
  );
};

export default KeySchool;
