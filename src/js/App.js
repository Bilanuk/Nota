import React, {useState} from "react";
import './index.scss'
import Track from "./Track/Track";
import LeftBar from "./SideBar/LeftBar";
import useAxios from "axios-hooks";


export default function App() {
    const [{data, loading, error}, refetch] = useAxios({
        url: 'http://localhost:3001/api/v1/track'
    })

    if (loading) return null
    if (error) return null

    return(
            <div className={'container'}>
                <LeftBar props={data} />

                <Track id={4}/>
            </div>
    )
}
