import React from "react";
import "./Header.css";

//Code for generating real date
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = dd + '.' + mm + '.' + yyyy;

function Header() {
    return (
        <div>
            <div className="header mt-14 ml-24 text-xl flex justify-between">
                <header className="text-left">Islamabad<i className="fa-solid fa-location-dot pl-2"></i></header>
                <header className="">{today}</header>
                <header className="mr-[170px] text-3xl font-bold">Good Morning</header>
            </div>
        </div>
    )
}

export default Header;