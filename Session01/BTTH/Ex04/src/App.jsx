import React, { useState } from "react";
import Clock from "./Clock";

function App() {
  const [showClock, setShowClock] = useState(true);

  return (
    <>
      <button onClick={() => setShowClock(!showClock)}>
        {showClock ? "Tắt đồng hồ (Unmount)" : "Bật đồng hồ (Mount)"}
      </button>

      {showClock && <Clock></Clock>}
    </>
  );
}

export default App;
