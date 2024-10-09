import React, { useState } from 'react'
import './App.css';
import Modal from './components/Modal';

function App () {
  const [openModal,setOpenModal] = useState(false);
  
  return (
    <div className='App'>
      <button className='button1'
      onClick={() => {
        setOpenModal(true);
      }
      }>Show popup</button>
     {openModal && <Modal closeModal={setOpenModal}/>}
      
    </div>
  )
}

export default App