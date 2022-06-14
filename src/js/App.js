import React, {useMemo, useState} from "react";
import './index.scss'
import Track from "./Track/Track";
import LeftBar from "./SideBar/LeftBar";
import useAxios from "axios-hooks";
import {API_URL, TrackContext} from "./context";


export default function App() {
    const [isPlaying, setIsPlaying] = useState(false)
    const [id, setId] = useState()
    console.log(isPlaying)

    const [{data, loading, error}, refetch] = useAxios({
        url: API_URL + 'track'
    })

    if (loading) return null
    if (error) return null

    return(
        <TrackContext.Provider value={[id, setId]}>
            <div className={'container'}>
                <LeftBar props={data} />

                <Track id={id} controls={[isPlaying, setIsPlaying]}/>
            </div>
        </TrackContext.Provider>
    )
}
