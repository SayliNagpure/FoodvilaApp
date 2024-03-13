import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";
import logo from "../logo.png"
import { Link } from "react-router-dom"
import userContex from "../utils/useContex";
import { useSelector } from "react-redux";


const HeaderCopnent = () => {
    return (<a href="/">
        <img src={logo} className="p-2 h-24" />
    </a>
    )
}
const NavBarItems = () => {
    const [islogedin, setIslogedin] = useState(false)

    const { loggedinUser } = useContext(userContex)

    const cartItems = useSelector((store) => store?.cart?.items)

    return (
        <div className="flex justify-between shadow-xl bg-gray-500 my-1 mx-1">
            <HeaderCopnent />
            <div className="flex flex-wrap">
                <ul className="flex py-8">
                    <li className="px-2 text-slate-300"><Link to="/">Home</Link></li>
                    <li className="px-2 text-slate-300"><Link to="/about">About Us</Link></li>
                    <li className="px-2 text-slate-300"><Link to="/Contact">Contact</Link></li>
                    <li className="px-2 text-slate-300"><Link to="/InstaMart">InstaMart</Link></li>
                    <li className="px-2 text-slate-300"><Link to="/CardPage">Cart -({cartItems?.length} items)</Link></li>
                </ul>
            </div>
            <div className="flex flex-wrap p-5 my-3 text-slate-300 hover:me-2.5">
                {islogedin ? <button onClick={() => setIslogedin(false)}>LogOut</button> : <button onClick={() => setIslogedin(true)}>LogIn</button>}
                <li className="px-2 text-slate-300">{loggedinUser}</li>

            </div>
        </div>
    )
}




export default NavBarItems