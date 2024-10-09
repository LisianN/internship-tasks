import React from 'react'




function Modal  ({closeModal})  {
  return (
    <div className='modalbg'>
  <div className='container'>
    <div className='title'>
      <h3>Theme Color</h3>
      <button>Change theme</button>
    </div>
    <div className='body'>
      <div className='row'>
        <p>Font Color</p>
        <input type='color' />
      </div>
      <hr />

      <div className='row'>
        <p>Background Color</p>
        <input type='color' />
      </div>
      <hr />

      <div className='row'>
        <p>Button Color</p>
        <input type='color' />
      </div>
      <hr />

      <div className='row'>
        <p>Button Border Color</p>
        <input type='color' />
      </div>
      <hr />

      <div className='row'>
        <p>Button Mouse Color</p>
        <input type='color' />
      </div>
    </div>
    <div className='footer'>
      <button onClick={() => closeModal(false)}>Cancel</button>
      <button onClick={() => closeModal(false)}>Save</button>
    </div>
  </div>
</div>
  )
    
}

export default Modal
            

       