import { useState } from "react";

function Darkmode() {
    const [Darkmode, setDarkmode] = useState(false);
        
    const enableDarkmode = () => {
        setDarkmode(!Darkmode);
        console.log("dark mode", Darkmode);
        if (Darkmode !== true) {
            
            document.body.style.color = "blue";
            document.body.style.background = "gray";
        } else {
            document.body.style.color = "green";
            document.body.style.background = "white";
        }
    };
    
  return (
    <div className="h1">
      <h1 >Vruti</h1>
      <button onClick={() => enableDarkmode()}> Dark mode </button>
    </div>
  );
}
export default Darkmode;
