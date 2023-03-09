import React from 'react'


export const Course = (props) => {
    console.log(props);
  return (
    <>
      <div className='parentBlock'>
       <div className='mainBlock'>
        <h1>{props.payload[0].trainerName}</h1>
        <h2>{props.payload[0].courseName}</h2>
        <h2>{props.payload[0].skills}</h2>
        <h2>{props.payload[0].duration}</h2>
       </div>
    </div>
    </>
  )
}
export default Course