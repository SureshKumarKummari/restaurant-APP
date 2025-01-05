import "./Menu.css";

export default function Menu(){
    let array1=[
        {name:"Item1",description:"From australia",price:212.99},
        {name:"Item2",description:"From US dishes",price:210.99},
        {name:"Item3",description:"From India's special dishes",price:2111.99}
    ]
    return(
        <div class="items">
            {array1.map((item,index)=>{
                return(
                <div key={index}>
                    <h1>{item.name}</h1>
                    <p>{item.description}</p>
                    <h1>${item.price}</h1><hr></hr>
                    </div>
                )
            })}
        </div>
    )
}