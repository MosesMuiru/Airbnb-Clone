import React from "react";
// this component contain the filter not the icons
// import Filters from "./Filters"; 
// sm:mx-6 md:mx-10 lg:mx-12
const Filter = ({title, icon}) => {
    return (
        <div className="">   
                
                <div className="flex text-white bg-red-500 gap-1 py-1 px-2 text-[12px] sm:px-3 rounded-full hover:bg-white hover:text-red-500  hover:border-red-400  duration-300 ease-in-out">{icon}{title}</div>
                
           
            
        </div>
    )
}

export default Filter;