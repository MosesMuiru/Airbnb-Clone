import React from "react";
import {FaAirbnb} from "react-icons/fa"
// import {FiMenu} from "react-icons/fi"
import {BiWorld} from "react-icons/bi"
import {AiOutlineUser} from "react-icons/ai"
import { FiSearch } from "react-icons/fi";
import {BsFillHouseDoorFill} from "react-icons/bs"

const Navbar = () =>

    (  
        // this is for the logo
         <div className=" pl-3 border-b flex justify-between items-center mt-1 pb-1">
         <div className="flex text-red-500 text-2xl">
        <FaAirbnb/>Rent</div>

    {/* t his*/}
    {/* middle  */}

    <div className=" hidden lg:flex justify-center align-center relative shadow-md shadow-gray-500 border  rounded-full  " >

        <input className="py-1 w-[20rem] rounded-full outline-none "
        type="search"
        placeholder=""
        ></input>

        <div className="flex justify-between absolute py-1 pr-14 pl-4 w-full font-semibold text-gray-400 text-md">
            <button className=" ">place</button>
            <button className=" border-l px-6">Time</button>
            <button className="border-l px-5">Group Size</button>   
        </div>
{/* the search button */}
        <div className=" text-white bg-red-500 rounded-full h-6 w-6 text-align-center p-1 my-1.5 mx-4 hover:bg-red-400 transition-all duration-100 ">
            <FiSearch className="text-white "/></div>
    </div>
{/* the right */}

        <div className="flex justify-center items-center pr-2 text-gray-600">

            <div className="flex gap-0.5"> 
                <BsFillHouseDoorFill/>
            <p className="text-sm font-mono ml ">Rent</p>
            </div>
           

            <div className="flex items-center justify-center m-4 gap-1">
                
                <BiWorld className=""/>
                <p className="text-[12px]">EN</p>
            </div>
           
            <div className="flex items-center gap-1 mr-1  rounded-full px-2 py-2 shadow-md shadow-gray-300 bg-red-400 text-white hover:bg-red-300 duration-200 ease-out">
                {/* <FiMenu/> */}
                <p>Sign in</p>
                <AiOutlineUser/>
                

            </div>
        </div>

    </div>
)


export default Navbar;