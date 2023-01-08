import React from "react";
import ball from "../assets/ball.jpg"
import fantasy from "../assets/fantasy.jpg"
// import girl from "../assests/girl.jpg"
// import imageOne from "../assests/imageOne.jpg"
// import imageThree from "../assets/imageThree.jpg"

import Rental from "./Rental"



const Rentals = () => {

    const rentals = [
        {title:"Texas, USA", image:ball, price:"2300"},
        {title:"Texas, USA", image:fantasy, price:"3000"},
        {title:"Texas, USA", image:ball,price:"3300"},
        {title:"Texas, USA", image:fantasy,price:"2300"},
        {title:"Texas, USA", image:ball,price:"4300"},
        {title:"Texas, USA", image:fantasy,price:"4300"},
        {title:"Texas, USA", image:ball,price:"4300"},
        {title:"Texas, USA", image:fantasy,price:"4300"},
        {title:"Texas, USA", image:ball,price:"4300"},
        // {title:"Texas, USA", image:girl, price:"400"},
        // {title:"Texas, USA", image:imageOne, price:"300"}, 
        // {title:"Texas, USA", image:imageThree, price:"3200"},
        
    ]

    return (
        <div className="p-3">
            <div className="grid grid-cols-1 gap-4">
           {rentals.map((el) => (

           <Rental title={el.title} image={el.image} price={el.price}/>))}
        </div>
        </div>
        
    )
}


export default Rentals;