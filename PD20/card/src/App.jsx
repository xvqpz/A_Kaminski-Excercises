import { useState, useEffect } from "react";
import Kortele from "./kortele/Kortele.jsx";

function App() {
  const [available, setAvailable] = useState(false);

  useEffect(() => {
    setAvailable(true); //cia pakeist kad veiktu ir neveiktu
  }, []);

  return (
    <div id="worker" style={{ filter: available ? "grayscale(0)" : "grayscale(1)" }}>
      <Kortele />
    </div>
  );
}

export default App;