import React, { useState } from 'react'

export const Calculator2=()=>{

    const [inputValues, setInputValues] = useState({
        input1: 2,
        input2: 2,
    })

    const [result, setResult] = useState({
        result: 0,
    });

    const onPlus = () => {
        setResult({result: parseInt(inputValues.input1) + parseInt(inputValues.input2)})
    }

    const onMinus = () => {
        setResult({result: parseInt(inputValues.input1) - parseInt(inputValues.input2)})
    }

    const onMulti = () => {
        setResult({result: parseInt(inputValues.input1) * parseInt(inputValues.input2)})
    }

    const onDivis = () => {
        setResult({result: parseInt(inputValues.input1) / parseInt(inputValues.input2)})
    }

    const inputHandler = (e)=>{
        setInputValues({...inputValues, [e.target.name]: e.target.value})
        console.log(inputValues)
    }
    
    return <div>
            <h1>Calculate 2</h1>
            <input 
                type="number" 
                value={inputValues.input1}
                onChange={inputHandler}
                name = 'input1'
            />
            <button onClick={onPlus}>+</button>
            <button onClick={onMinus}>-</button>
            <button onClick={onMulti}>*</button>
            <button onClick={onDivis}>/</button>
            <input 
                type="number" 
                value={inputValues.input2}
                onChange={inputHandler}
                name = 'input2'
            />
            <h1 style={{textAlign: 'center', width: 420}}>sum:{result.result}</h1>
            </div>
}