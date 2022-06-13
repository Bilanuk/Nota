import React from "react";
import styled from "styled-components";

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
  //box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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
    console.log(props.props.attributes)

    const sayHi = (title) => console.log(title)

    return(
        <SideBarTrackStyled onClick={() => sayHi(props.props.attributes.title)}>
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
