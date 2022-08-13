const iniData={
    cartcount : -0
}


export  default  function cartReducer( state=iniData , action )
{

    switch(action.type)
    {
        case 'add' : return {
            cartcount : state.cartcount +1
        }
        case 'del' : return {
            cartcount : state.cartcount-1
        }
        default :  {
            return state;
        }
    }
}