import React from 'react'
import { useDispatch } from 'react-redux';
import './Items.css';

export default function Items() {

    const dispatch = useDispatch();
     

    function addi(){
        // alert('hi');
        dispatch({type : 'add'});
    }
    function removei()
    {
        // alert('bye');
        dispatch({type : 'del'});
    }

  return (
    <div>
       <h1>
        This is Items Component 
       </h1>
       <button style={{margin : '10px' , fontSize: '15px'}} onClick={addi}>ADD-TO-CART</button>
       <button  style = {{fontSize: '15px'}} onClick={removei}>REMOVE-FROM-CART</button>
       <hr />
    </div>
  )
}
