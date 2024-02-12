import '../assets/css/card.css'

const Card=({data, heading})=>{
    console.log(data);

    return(
        <div className="card_body">
            <p>Heading {heading}</p>
           {
            data.ṭītle !==undefined &&
 <p className="card_title"> Title={data?.title}</p>
           }
            <p className="card_price">Price= ${data?.price}</p>
        </div>
    )

}

export default Card