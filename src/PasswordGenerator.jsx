import React, { useState } from 'react'
import "./passwordGenerator.css"

const PasswordGenerator = () => {

    const [length,setLength] = useState(8);
    const [includeUpperCase,setIncludeUpperCase] = useState(true)
    const [includeLowerCase,setIncludeLowerCase] = useState(true)
    const [includeNumbers,setIncludeNumbers] = useState(true)
    const [includeSymbols,setIncludeSymbols] = useState(true)
    const [password,setPassword] = useState("")

    const generatePassword=()=> {
        let charset = " ";
        if(includeUpperCase) charset+= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if(includeLowerCase) charset+= "abcdefghijklmnopqrstuvwxyz";
        if(includeNumbers) charset+= "1234567890";
        if(includeSymbols) charset+= "!@#$%^&*()_+=-"
        let finalPassword = ""
        // console.log(charset)
        for(let i = 0; i<length; i++){
            let randomPass = Math.floor(Math.random() * charset.length)
            finalPassword += charset[randomPass];
        }
       
        setPassword(finalPassword)

    }

    function handleCopy(){
        navigator.clipboard.writeText(password)
        alert("password copied")
    }

    return (
        <>
            <div className="main-container">
                <h1>STRONG PASSWORD GENERATOR</h1>
                <div className="input-sec">
                    <label htmlFor="num">Password Length</label>
                    <input type="number" id='num' value={length} onChange={(e)=>setLength(parseInt(e.target.value))} />
                </div>
                <div className="checkbox-container">
                    <div className="uppercase">
                        <input type="checkbox" id='upper' checked={includeUpperCase} onChange={(e)=>setIncludeUpperCase(e.target.checked)} />
                        <label htmlFor="upper">Include UpperCase</label>
                    </div>
                    <div className="lowercase">
                        <input type="checkbox" id='lower' checked={includeLowerCase} onChange={(e)=>setIncludeLowerCase(e.target.checked)}/>
                        <label htmlFor="lower">Include LowerCase</label>
                    </div>
                    <div className="numbers">
                        <input type="checkbox" id='numb' checked={includeNumbers} onChange={(e)=>setIncludeNumbers(e.target.checked)} />
                        <label htmlFor="numb">Include Numbers</label>
                    </div>
                    <div className="symbols">
                        <input type="checkbox" id='symbol' checked={includeSymbols} onChange={(e)=>setIncludeSymbols(e.target.checked)} />
                        <label htmlFor="upper">Include Symbols</label>
                    </div>
                </div>
                <div className="btn">
                    <button onClick={generatePassword}>Generate Password</button>
                </div>
                <footer>
                <div className="input-sec">
                    <input type="text" readOnly value={password} />
                    <button className='copt-btn' onClick={handleCopy}>Copy</button>
                </div>
                </footer>
            </div>
        </>
    )
}

export default PasswordGenerator