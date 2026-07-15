import React, { useState } from 'react'




const UseState = () => {


    
    const [count,setCount]=useState(0)
    const updatedData=()=>{
        setCount(count+1)
    }

  return (<>
   <div>
    <p>{count}</p>
    <button onClick={updatedData}>Click to Update</button>
    </div></>
   
  )
}

export default UseState;