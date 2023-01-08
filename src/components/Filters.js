import React from "react"
import {ImKey} from "react-icons/im" 
import {GiMineExplosion, GiFishingBoat} from "react-icons/gi"
import {RiAliensFill} from "react-icons/ri"
import { BsFillTreeFill } from "react-icons/bs"

import Filter from "./Filter"


const Filters = () => {
const sorting = [
    {title:"Boat", icon:<GiFishingBoat/>},
    {title:"New", icon:<GiMineExplosion/>},
    {title:"Unique", icon:<RiAliensFill/>},
    {title:"Private", icon:<ImKey/>},
    {title:"Forest", icon:<BsFillTreeFill/>}
    
]

return(

    <div className="">
        <div className="flex my-2 justify-center gap-2">
            {sorting.map((Element) => (<Filter title={Element.title} icon={Element.icon}/>))}
        </div>
    </div>
)}


export default Filters; 