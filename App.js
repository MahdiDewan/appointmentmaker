import React, { useEffect, useState } from "react";

function App() {
  let currDate = new Date();
  currDate = currDate.getHours();
  let greeting;
  const cssStyle = {};

  let time = new Date().toLocaleTimeString();
  const [currTime, setTime] = useState(time)

  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setTime(time);
  };

  setInterval(UpdateTime,1000);

  if (currDate >= 24 && currDate < 12) {
    greeting = "Current Time";
    cssStyle.color = "#4776e6";
  } else if (currDate >= 12 && currDate < 18) {
    greeting = "Current Time";
    cssStyle.color = "#4776e6";
  } else if (currDate >= 18 && currDate < 20) {
    greeting = "Current Time";
    cssStyle.color = "#4776e6";
  } else if (currDate >= 20 && currDate < 24) {
    greeting = "Current Time";
    cssStyle.color = "#4776e6";
  }

  return (
    <>
      <div>
        <h1>
          Thank you for making an appointment with us, a confirmation has been sent to your email...
          <span style={cssStyle}> {greeting} - {time}
          </span>
        </h1>
      </div>
    </>
  );
}

export default App;
