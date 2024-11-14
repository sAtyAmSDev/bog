import {useState} from "react"
function State(params) {
    const [ Data , setData]=useState(0)
    
function UpdateState(params) {
    setData(Data+1)
}
    return(
        <div>
            <h1>{ Data}</h1>
            <button onClick={UpdateState}>UpdateState</button>
        </div>
    )
}

export default State