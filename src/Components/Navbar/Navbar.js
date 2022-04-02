import React from "react";
// import React,{useState} from "react";
import { MenuList } from "./MenuList";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar(){
    // const[clicked,setClicked] = useState(false);
    const menuList = MenuList.map(({url,title},index) =>{

return(
<li key={index}>
    <NavLink exact to ={url} activeClassName="active">{title}</NavLink>
</li>
);});
return(
    <>
    <nav>
        <div className="logo">
            VPN<font>Lab</font>
        </div>
        <div className="menu-icon">
            <i className="fa fa-bara"></i>

        </div>
        <ul className="menu-list">{menuList}</ul>
    </nav>
    </>
)

}
export default Navbar;