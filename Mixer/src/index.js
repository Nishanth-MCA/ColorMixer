import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

function Mixer() {
  const [bgstyle, setbgcolor] = useState('')
  const [hstyle, setheading] = useState('')
  const [dstyle, setdesc] = useState('')

  const bgc = (event) => { let bg = event.target.value; setbgcolor(bg); }
  const hc = (event) => { let hc = event.target.value; setheading(hc); }
  const dc = (event) => { let dc = event.target.value; setdesc(dc); }

  return (
    <>
      <h1 className='bg-dark text-white text-center mb-5'>Color Mixer</h1>
      <div className='border border-dark rounded-3 m-3' style={{backgroundColor:`${bgstyle}`}}>
        <div className='m-3'>
          <h1 className='mb-3' style={{color:`${hstyle}`}}>This is Heading</h1>
          <p style={{color:`${dstyle}`}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum pariatur ullam velit, magnam consequatur natus voluptatum distinctio, molestiae quibusdam laborum cupiditate modi enim dolor odit ad dolores blanditiis nulla! Quibusdam ipsum odio inventore nisi. Assumenda nisi similique quod vitae minus esse quos voluptas voluptates autem ea distinctio temporibus facere eos, et consequuntur porro reprehenderit maiores quisquam tempora iusto optio est iure eaque libero. Vel sint quibusdam architecto saepe inventore hic, ipsum nulla rerum velit maiores voluptatibus quo asperiores itaque labore. Fuga aspernatur quis est saepe inventore necessitatibus. Fugiat necessitatibus iste illum officia praesentium dolores voluptas a. Debitis odit sed voluptatem.</p>
        </div>
      </div>
      <div className='d-xs-flex flex-row w-2'>
        <form className='m-4 d-xl-flex flex-row gap-xl-5'>
          <p>Background:
            <input
              value={bgstyle}
              onChange={bgc}
              type="color"
            />
            <p>Hexavalue</p>
            <input className='border border-2 in col-xl-5'
            value={bgstyle}
            onChange={bgc}
            />
          </p>

          <p>Heading:
            <input
              value={hstyle}
              onChange={hc}
              type="color"
            />
            <p>Hexavalue</p>
            <input className='border border-2 in col-xl-5'
            value={hstyle}
            onChange={hc}           
            />
          </p>

          <p>Description:
            <input
              value={dstyle}
              onChange={dc}
              type="color"
            />
            <p>Hexavalue</p>
            <input className='border border-2 in col-xl-5'
            value={dstyle}
            onChange={dc}
            />
          </p>
        </form>
      </div>
    </>

  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Mixer />
  </React.StrictMode>
);

reportWebVitals();