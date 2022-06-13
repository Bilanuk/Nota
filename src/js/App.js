import React from "react";
import './index.scss'
import Track from "./Track/Track";
import LeftBar from "./SideBar/LeftBar";

export default function App() {
    return(
        <div className={'container'}>

            <LeftBar/>

            <Track/>
        </div>
    )
}
