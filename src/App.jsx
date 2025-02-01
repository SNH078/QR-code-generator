// npm i create vite@latest
// npm i 
//  npm i  react-qr-code
//  npm run dev
import {useState} from "react"
import QRCode from "react-qr-code"
import "./App.css"
function App() {
const [input,setInput]=useState("");
const [qrCode, setQR]=useState("");

function handleGen(){
  setQR(input);
}
  return (
    <div className="mainn">
   <h1>QR CODE GENERATOR </h1>
   <div className="inputqr">
    <input onChange={(e)=>setInput(e.target.value)} type="search" name="qr" placeholder="enter your value here "/>
    <button onClick={handleGen} disabled={input && input.trim()!==""? false:true} >Generate</button>
    
    <div className="qr">
      <QRCode id="qr-code-value" value={qrCode} size={400}/> 
    </div>
   </div>
    </div>
  )
}

export default App
