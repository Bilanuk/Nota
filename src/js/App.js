import React, {useState} from "react";
import './index.scss'
import Track from "./Track/Track";
import SideBar from "./SideBar/SideBar";
import useAxios from "axios-hooks";
import {API_URL, TrackContext} from "./context";
import {Button} from "react-bootstrap";


export default function App() {
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentTrack, setTrack] = useState()

    const [{data, loading, error}, refetch] = useAxios({
        url: API_URL + 'track'
    })

    if (loading) return null
    if (error) return console.log(error)

    return(
        <TrackContext.Provider value={[currentTrack, setTrack]}>
            <div className={'container'}>
                <SideBar props={data} refetch={refetch} />

                <Track currentTrack={currentTrack} controls={[isPlaying, setIsPlaying]}/>
            </div>
        </TrackContext.Provider>
    )
}
