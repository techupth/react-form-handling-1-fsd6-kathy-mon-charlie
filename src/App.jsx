import "./App.css";
import { useState } from "react";

function App() {
  const [greeting, setGreeting] = useState("Greeting Message");
  const [inputGreeting, setInpuGreeting] = useState("");
  const [logGreeting, setLogGreeting] = useState([]);
  const updateLog = (newGreeting) => {
    const newLog = [...logGreeting];
    newLog.push(newGreeting);
    setLogGreeting(newLog);
  };

  const deleteLog = (index) => {
    const newLog = [...logGreeting];
    newLog.splice(index, 1);
    setLogGreeting(newLog);
  };

  return (
    <div className="App">
      <div className="greeting-container">{greeting}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          value={inputGreeting}
          onChange={(event) => setInpuGreeting(event.target.value)}
          className="border border-black bottom-5 px-[20px]"
        />
      </div>

      <div
        className="buttons"
        onClick={() => {
          setGreeting(inputGreeting);
          updateLog(inputGreeting);
          setInpuGreeting("");
        }}
      >
        <button>Update text</button>
      </div>

      <div className="mt-[20px]">
        {logGreeting.map((item, index) => (
          <div
            className="relative h-[50px] rounded-full bg-slate-300 px-[20px] mt-[5px]"
            key={index}
          >
            <p className="h-full flex justify-center items-center">{item}</p>
            <button
              onClick={() => {
                deleteLog(index);
              }}
              className="absolute w-[40px] h-[40px] rounded-full right-[7px] top-[5px] p-2 text-center bg-red-400"
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
