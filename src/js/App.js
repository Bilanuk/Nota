import React from "react";
import TrackBoard from "./TrackBoard/TrackBoard";
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
