import React,{useState , useCallback, useEffect, useRef} from 'react';

function App() {
  const [length,setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const [password, setPassword] = useState('');


  const passwordRef = useRef(null);


  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str += "0123456789";
    if(charAllowed) str += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    for(let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword])


  const copypasswordtoclipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 99);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <h1 className="py-6 text-3xl font-bold text-center">Password Generator</h1>
      <div className='min-h-screen bg-gray-700 flex justify-center items-center'>
        <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-6 my-8 text-black bg-gray-300'>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-white'>
          <input 
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={passwordRef}
          />

          <button 
          onClick={copypasswordtoclipboard}
          className="
    bg-blue-700
    text-white
    px-3
    py-1
    shrink-0
    rounded
    transition-all
    duration-200
    hover:bg-blue-800
    hover:scale-105
    active:bg-blue-600
    active:scale-95
  " >copy</button>
      </div>


      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
          type="range"
          min={6}
          max={20}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
          type="checkbox"
          checked={numberAllowed}
          id="numberInput"
          onChange={() => {setNumberAllowed(prev => !prev);
          }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input
          type="checkbox"
          defaultChecked={charAllowed}
          id="characterInput"
          onChange={() => {setCharAllowed(prev => !prev);
          }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>


      </div>
      </div>
    </>
  )
}

export default App