import Card from '../snippets/card.jsx'
import "../assets/css/home.css"


function Home(){

    let arr=[
        {
            title:"Shirt",
            price:200
        },
        {
            title:"Skirt",
            price:200
        },
        {
            title:"Trousers",
            price:200
        },
        {
            title:"Pjana",
            price:200
        },
    ]

    return(

        <div>
            <p>New Arruvals</p>
            <div className='arrival_section'>
            {
                arr.map((item,index)=>{
                    return(
                        <>
                <Card data={item} heading="New Arrivals"/>
                        </>
                    )
                })
            }
            <div className='arrival_section'>
            {
                arr.map((item,index)=>{
                    return(
                        <>
                <Card data={item} heading="Content "/>
                        </>
                    )
                })
            }

            </div>
            </div>
            </div>
    )
}

export default Home