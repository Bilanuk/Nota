import React, {useContext} from "react";
import styled from "styled-components";
import {TrackContext} from "../../context";

const SideBarTrackStyled = styled.div`
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  margin: 20px;
  backdrop-filter: blur(5px);
  transition: all 1s;
`
const ActiveSideBarTrackStyled = styled.div`
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  margin: 20px;
  backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.11);
  transition: all 1s;
`

const TrackCoverWrapper = styled.div`
  width: 100px;
  height: 100px;
`

const TrackCover = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  object-fit:cover;
`

const TrackData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 10px;
  color: white;
`

export default function SideBarTrack({ ...props }) {
    const [, setTrack] = useContext(TrackContext)

    if (props.active) return (
        <ActiveSideBarTrackStyled onClick={() => setTrack(props.props)}>
            <TrackCoverWrapper>
                <TrackCover src={props.props.attributes.image_url}/>
            </TrackCoverWrapper>

            <TrackData>
                <p>{props.props.attributes.title}</p>
                <p>{props.props.attributes.author}</p>
            </TrackData>
        </ActiveSideBarTrackStyled>
    )

    return(
        <SideBarTrackStyled onClick={() => setTrack(props.props)}>
            <TrackCoverWrapper>
                <TrackCover src={props.props.attributes.image_url}/>
            </TrackCoverWrapper>

            <TrackData>
                <p>{props.props.attributes.title}</p>
                <p>{props.props.attributes.author}</p>
            </TrackData>
        </SideBarTrackStyled>
    )
}
