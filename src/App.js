import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Items from './Items';
import cartReducer from './cartReducer';
import { createStore  } from 'redux';
import {Provider } from 'react-redux';
// import { configureStore } from '@reduxjs/toolkit';

function App() {
  const store=createStore(cartReducer);

  return (
    <div className="App">

        <div className='dude'>
          <h1>
            React-Redux-Cart
          </h1>
        </div>
        <Provider store={store}>
        <Navbar />
        <Items />
        </Provider>
   
    </div>
  );
}

export default App;
