import React, {useContext, useState} from "react";
import useAxios from "axios-hooks";

import styled from "styled-components";
import SideBarTrack from "./SideBarTrack/SideBarTrack";
import {API_URL, TrackContext} from "../context";

const LeftBarWrapper = styled.div`
  position: absolute;
  left: 20px;
  width: 350px;
  height: 85vh;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: start;
  border-radius: 10px;
  margin: 20px;
  backdrop-filter: blur(5px);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

export default function LeftBar() {
    const [id,] = useContext(TrackContext)

    const [{data, loading, error}, refetch] = useAxios({
        url: API_URL + 'track'
    })

    if (loading) return console.log('Loading...')
    if (error) return console.log(error)

    return(
        <LeftBarWrapper>
            {data.data.map((track) =>
                track.id == id ? (
                    <SideBarTrack key={'track_id: ' + track.id} props={track}
                                  active={true}
                    />
                ) : (
                    <SideBarTrack key={'track_id: ' + track.id} props={track} a
                                  ctive={false}
                    />
                )
            )}
        </LeftBarWrapper>
    )
}
// {data.data.map((track) =>
//     <Track key={'track_id: ' + track.id} props={track}/>
//     <LeftBarWrapper className={"left-nav"}></LeftBarWrapper>
// )}
