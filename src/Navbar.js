import React from 'react'
import { useSelector } from 'react-redux'

export default function Navbar() {
    const cart=useSelector(store => store);
  return (
    <div >
       <h1>
        This is Navbar Component
       </h1>
       <h2>
        Number of Cart :  {cart.cartcount}
       </h2>
    </div>
  )
}

