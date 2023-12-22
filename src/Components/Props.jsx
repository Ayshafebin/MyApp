import React from 'react'

const Props = (props) => {
  return (
    <div>{props.vl}</div>
  )
}

export default Props



// const fetching=async ()=>{

//   try{
//       const res=await fetch("https://api.postalpincode.in/pincode/673307")
//       const data=await res.json()
//     const names=data[0].PostOffice.map((item)=>item.Name)
//       console.log(names)
//   }
//   catch(err)
//   {
//       console.log(err)
//   }
// }
// fetching()