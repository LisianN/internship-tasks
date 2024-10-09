import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './App.css';


const App = () => {
  return (
    <div><Tabs>
    <TabList>
      <Tab>Domains</Tab>
      <Tab>Web Hosting</Tab>
      <Tab>Dedicated Servers</Tab>
      <Tab>Email Hosting</Tab>
      <Tab>Free Hosting</Tab>
      <Tab>WordPress Hosting</Tab>
      
    </TabList>

    <TabPanel>
      <div className='container'>
        <div className='card1'><h3>.COM</h3>
        <h4>$5.99/yr</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
        <button><p><b>Buy Now</b></p></button>
        </div>

        <div className='card1'>
        <h3>.AL</h3>
        <h4>$5.99/yr</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
        <button><p><b>Buy Now</b></p></button></div>

        <div className='card1'>
        <h3>.NET</h3>
        <h4>$7.99/yr</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur!</p>
        <button><p><b>Buy Now</b></p></button></div>

        <div className='card1'>
        <h3>.HEALTH</h3>
        <h4>$6.99/yr</h4>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing..</p>
        <button><p><b>Buy Now</b></p></button></div>

        <div className='card1'><h3>.CO.UK</h3>
        <h4>$8.99/yr</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
        <button><p><b>Buy Now</b></p></button>
        </div>

        <div className='card1'><h3>.ORG</h3>
        <h4>$10.99/yr</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
        <button><p><b>Buy Now</b></p></button>
        </div>

        <div className='card1'><h3>.CO</h3>
        <h4>$9.99/yr</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
        <button><p><b>Buy Now</b></p></button>
        </div>

        <div className='card1'><h3>.SEA</h3>
        <h4>$7.99/yr</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
        <button><p><b>Buy Now</b></p></button>
        </div>

      </div>
    </TabPanel>
    <TabPanel>
    <div className='container1'>
        <div className='card2'><h3>STANDARD</h3>
        <h4>$9.99/yr</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
        <button className='button1'><p><b>Buy Now</b></p></button>
        </div>

        <div className='card2'>
        <h3>PREMIUM</h3>
        <h4>$12.99/yr</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
        <button className='button1'><p><b>Buy Now</b></p></button></div>
       

        <div className='card2'>
        <h3>EXTRA</h3>
        <h4>$15.99/yr</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur!</p>
        <button className='button1'><p><b>Buy Now</b></p></button></div>
        </div>

    </TabPanel>
    <TabPanel>
    <div className='container2'>
        <div className='card3'><h2>BEGGINER</h2>
        <h4>2/10</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
        <button className='button2'><p><b>Buy Now</b></p></button>
        </div>
        
        <div className='card3'>
        <h2>iNTERMIDIATE</h2>
        <h4>4/10</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
        <button className='button2'><p><b>Buy Now</b></p></button></div>
       

        <div className='card3'>
        <h2>ADVANCED</h2>
        <h4>8/10</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur!</p>
        <button className='button2'><p><b>Buy Now</b></p></button></div>
        

        <div className='card3'>
        <h2>PROFFESIONAL</h2>
        <h4>10/10</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur!</p>
        <button className='button2'><p><b>Buy Now</b></p></button>
        </div>
        </div>
        

    </TabPanel>

    
      
    
  </Tabs>
</div>
    
  )
  
  
}

export default App