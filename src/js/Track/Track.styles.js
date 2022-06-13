import styled from "styled-components";

export const TrackWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  margin: 10px;
  backdrop-filter: blur(5px);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`
export const CoverImageWrapper = styled.div`
  width: 45vh;
  height: 45vh;
  margin: 0 auto;
`

export const CoverImage = styled.img`
  border-radius: 50%;
  object-fit: cover;
  width: 45vh;
  height: 45vh;
  margin: 0 auto;
`

export const Title = styled.h1`
  color: white;
`
export const Author = styled.h4`
  color: #c9c9c9;
  margin-top: 0;
`
