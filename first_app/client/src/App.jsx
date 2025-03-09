import {io} from "socket.io-client"
import { useEffect } from "react";
import './App.css'

function App() {
  const socket = io("http://localhost:3000");

  useEffect(()=>{
    socket.on('connect',()=>{
      console.log(`Got connected to server with socket ID : ${socket.id}`)
    })

    socket.on('welcome',(message)=>{
      console.log(message)
    })
  },[])

  return (
    <>
      <div>
        Hello
      </div>
    </>
  )
}

export default App
