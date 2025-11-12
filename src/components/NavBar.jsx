import { useNavigate } from "react-router";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";
import { useState } from "react";

const NavBar = () => {
    const {navigate, token} = useAppContext();

    return (
        <div className="flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32"> 
            <img onClick={() => navigate("/")} src={assets.logo} alt="logo" className="w-32 sm:w-44 cursor-pointer"/>
            <div className="flex justify-between bg-primary p-4 rounded-full">
                <button onClick={()=>navigate("/admin")} className="flex items-center text-white gap-2 w-28 h-2 cursor-pointer">
                    <span>{token ? "Dashboard" : "Admin Login"}</span>
                    <img src={assets.arrow} className="w-3" alt="arrow" />
                </button>
            </div>
        </div>
    )
};
export default NavBar;
