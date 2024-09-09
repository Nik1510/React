import { useState, useCallback, useEffect ,useRef} from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');


  // useRef hook

  const passwordRef = useRef(null)
  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (numberAllowed) {
      str += '0123456789';
    }

    if (charAllowed) {
      str += '!@#$%^&*()';
    }

    for (let i = 0; i < length; i++) {
      const charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }

    setPassword(pass); // Set the generated password
  }, [length, numberAllowed, charAllowed,setPassword]);

  const copyPasswordToClipBoard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,101) // if you wan to select till variable 101
    window.navigator.clipboard.writeText(password)
  },[password])

  // useEffect that reacts to changes in the dependencies (length, numberAllowed, charAllowed, passwordGenerator)
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
        <div className='className="flex shadow rounded-lg overflow-hidden mb-4"'>
          <h1 className='text-white text-center my-3'>Password Generator</h1>
          <div className='flex shadow rounded-lg overflow-hidden mb-4'>
            <input
              type="text"
              value={password}
              className='outline-none w-full py-1 px-3'
              placeholder='password'
              readOnly
              ref={passwordRef}
            />
            <button
            onClick={copyPasswordToClipBoard}
             className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
          </div>
          <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input
                type="range"
                min={8}
                max={100}
                value={length}
                className='cursor-pointer'
                onChange={(e) => setLength(Number(e.target.value))}
              />
              <label>Length: {length}</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input
                type="checkbox"
                checked={numberAllowed}
                id='numberInput'
                onChange={() => setNumberAllowed(prev => !prev)}
              />
              <label htmlFor="numberInput">Number</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input
                type="checkbox"
                checked={charAllowed}
                id='charInput'
                onChange={() => setCharAllowed(prev => !prev)}
              />
              <label htmlFor="charInput">Character</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
