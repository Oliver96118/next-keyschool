import React, { useState } from "react";
import TypingBoard from "../TypingBoard";

const KeySchool = () => {
  const textlist = [
    "If you've previously installed create-react-app globally, it is recommended that you uninstall the package to ensure npx always uses the latest version of create-react-app. To uninstall, run this command: npm uninstall -g create-react-app",
    "In older React code bases, you may find Class components primarily used. It is now suggested to use Function components along with Hooks, which were added in React 16.8. There is an optional section on Class components for your reference.",
    "A class component must include the extends React.Component statement. This statement creates an inheritance to React.Component, and gives your component access to React.Component's functions.",
    "A Function component also returns HTML, and behaves much the same way as a Class component, but Function components can be written using much less code, are easier to understand, and will be preferred in this tutorial.",
    "Props are arguments passed into React components.\
    props are passed to components via HTML attributes.",
  ];
  const [curText, setCurText] = useState(textlist[0]);
  const selText = (n) => {
    // console.log(n)
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
