import { useState } from "react"
//MAY COME ACROSS USE OF USESTATE() IN THE WILD

const Counter = () => {
    const [count, setCount] = useState(0)
//never do count = count-1
    const handlePlusClick =()=>{
        setCount(count+1)

    }
    const handleMinusClick =()=>{
        if (count <=0){
            return
        }

        setCount(count-1)

    }
    //this is where we return JSX
    return(
        <div>
            <h1>Countee : {count}</h1>
            <button onClick={handleMinusClick}>[-]</button>
            <button onClick={handlePlusClick}>[+]</button>
        </div>
    )
}

export default Counter