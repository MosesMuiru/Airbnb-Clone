import React from "react";

const Rental = ({title,image,price}) => {
    return(
        <div>
            <div className="flex-col">
                <img src={image} alt="" className="object-cover rounded-[1.3rem]"/>
                <div className="">{title}</div>
                <div className="">{[price]}</div>
            </div>
        </div>
    )
}

export default Rental;