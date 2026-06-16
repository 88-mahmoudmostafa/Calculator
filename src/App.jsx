import  { useState } from 'react'
 import './App.css'

function App() {
  const [value,setValue]=useState('')


  return (
    <div className='container'>
      <div className='content'>
       <form onSubmit={(e)=>{e.preventDefault()}} action=''>
          <div className='title'>
            <input type='text' placeholder='Calculator' value={value}/>
          </div>
          <div className='btn'>
          <div>
            <button onClick={(e)=>{ e.preventDefault();  setValue('')}}>AC</button>
            <button onClick={()=>setValue(value.slice(0,-1))}>AE</button>
            <button onClick={()=>setValue(value+ '.')}>.</button>
            <button onClick={()=>setValue(value+'/')}>/</button>
          </div>
          <div>
            <button onClick={()=>setValue(value+'9')}>9</button>
            <button onClick={()=>setValue(value+'8')}>8</button>
            <button onClick={()=>setValue(value+'7')}>7</button>
            <button onClick={()=>setValue(value+'*')}>*</button>
          </div>
          <div>
            <button onClick={()=>setValue(value+'6')}>6</button>
            <button onClick={()=>setValue(value+'5')}>5</button>
            <button onClick={()=>setValue(value+'4')}>4</button>
            <button onClick={()=>setValue(value+'+')}>+</button>
          </div>
            <div>
            <button onClick={()=>setValue(value+'3')}>3</button>
            <button onClick={()=>setValue(value+'2')}>2</button>
            <button onClick={()=>setValue(value+'1')}>1</button>
            <button onClick={()=>setValue(value+'-')}>-</button>
          </div>

           <div>
            <button onClick={()=>setValue(value+'00')}>00</button>
            <button onClick={()=>setValue(value+'0')}>0</button>
            <button value='=' onClick={()=>setValue(eval(value))} className='play'>=</button>
            
          </div>
          </div>

        </form>
      </div>

    </div>
  )
}

export default App