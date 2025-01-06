 export default function Cart(props){

    return(
        <div>
            <h3>{props.itemname}</h3>
            <h2>{props.quantity}</h2>
            <h1>{props.price}</h1>
        </div>
    )
 }