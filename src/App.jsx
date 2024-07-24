import { useState } from 'react';
import './App.css'
import PasswordOutput from './components/PasswordOutput'

function App() {
  const [outputPassword, setOutputPassword] = useState('');

  function generatePassword(e) {
    e.preventDefault();
0
    const upperCaseLetters = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
    const lowerCaseLetters = [...'abcdefghijklmnopqrstuvwxyz'];
    const numbers = [...'0123456789'];
    const symbols = [...'!@#$%^&*()_+=][{}|;:,.<>?'];

    const passwordLength = document.getElementById('password_length').value;
    const includeNumbers = document.getElementById('include_numbers').checked;
    const includeSymbols = document.getElementById('include_symbols').checked;
    const includeUppercase = document.getElementById('uppercase_letters').checked;
    const includeLowercase = document.getElementById('lowercase_letters').checked;
    var password = '';

    if(passwordLength < 8 || passwordLength > 16) {
      return alert('Password length must be between 8 and 16 characters');
    }

    const combineArrays = [...(includeUppercase ? upperCaseLetters : []),
    ...(includeLowercase ? lowerCaseLetters : []),
    ...(includeNumbers ? numbers : []),
    ...(includeSymbols ? symbols : [])];
    
    for (let i = 0; i < passwordLength; i++) {
      password += combineArrays[Math.floor(Math.random() * combineArrays.length)];
    }

    setOutputPassword(password);
  }

  function disableMinimum(e) {
    const uppercaseLettersChecked = document.getElementById('uppercase_letters');
    const lowercaseLettersChecked = document.getElementById('lowercase_letters');
    if (!uppercaseLettersChecked.checked && !lowercaseLettersChecked.checked) {
      e.target.checked = true;
    }
    
  }

  return (
    <section className='min-h-screen bg-blue-800 grid place-items-center'>
      <form className='bg-blue-900 p-8 rounded-md text-white grid gap-2
                        [&>label]:flex [&>label]:justify-between'>
        <h1 className='text-xl font-bold'>Password Generator App</h1>
        <PasswordOutput outputPassword={outputPassword} />
        <label>Password length <input type="number" name="password_length" id="password_length" defaultValue={8} className='w-12 bg-blue-950 px-2' /></label>
        <label>Include uppercase letters <input type="checkbox" name="uppercase_letters" id="uppercase_letters" onChange={disableMinimum} defaultChecked /></label>
        <label>Include lowercase letters <input type="checkbox" name="lowercase_letters" id="lowercase_letters" onChange={disableMinimum} defaultChecked /></label>
        <label>Include numbers <input type="checkbox" name="include_numbers" id="include_numbers" /></label>
        <label>Include symbols <input type="checkbox" name="include_symbols" id="include_symbols" /></label>
        <button onClick={(e) => generatePassword(e)} className='bg-blue-950 p-2 mt-2 rounded-sm'>Generate Password</button>
      </form>
    </section>
  )
}

export default App
