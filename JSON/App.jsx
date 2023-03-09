import React from 'react'
import json from "./userdata.json";
import Course from './Course';
import"./global1.css"
export const App = () => {
  return (
    <div>
     <Course payload={json}/>
    </div>
  )
}


export default App
