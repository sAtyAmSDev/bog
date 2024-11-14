function Event(params) {
    let Data = "Satyam"
    function Apple(){
        Data="Bhagvat"
        alert(Data)
    }
    return (
        <div>
            <h1>{Data}</h1>
            <button onClick={()=>Apple()}>Click me</button>
        </div>
    )
}

export default Event