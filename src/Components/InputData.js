import React,{useState} from "react"
function InputData() {
    const [data,setData]=useState(null)
    const [print,setPrint]=useState(false)


function GetData(e) {
    console.log(e.target.value);
    setData(e.target.value)
    setPrint(false)
}

    return(
        <div>

           {
            print? <h1>{data}</h1>:null
           }
            <input type="text" onChange={GetData}/>

            <button onClick={()=>setPrint(true)}>Click me</button>
        </div>
    )
}

export default InputData 