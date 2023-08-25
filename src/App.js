import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Form from './Components/Form/Form';
import { useState } from 'react';

function App() {
  return (
    <div>
      <Header></Header>
      <div className='flex'>
        <Sidebar></Sidebar>
        <Form></Form>
      </div>
    </div>
  );
}

export default App;
