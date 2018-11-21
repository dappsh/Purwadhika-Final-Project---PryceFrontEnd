import React, { Component } from 'react';
// import logo from './logo.svg';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import './App.css';
import MainRoutes from './Utils/MainRoutes';
// import Header from './components/Header/header';
// import Footer from './components/Footer/footer';
// import {BrowserRouter, Route, Switch} from "react-router-dom"

class App extends Component {
  render() {

    const  store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    
    return (
      

      <Provider store={store}>
      {/* membuat store yang menyimpan state, reducer */}
      {/* seluruh component harus di bungkus provider*/}

        <div>
          {/* <Header/> */}
        
          <MainRoutes/>
          {/* main routes berisi Route Path */}
          {/* <Footer/> */}
       
        </div>

      </Provider>
    );
  }
} 

export default App;
