import React from "react";

const Page = props => {
  const testRef = React.useRef(null);
  
  console.log(testRef);


  const click = () => {
    console.log(testRef.current.value);
  }

  return (
    <>
      <input ref={testRef}></input>
      <button onClick={() => click()}>1111</button>
    </>
  );
};

export default Page;
