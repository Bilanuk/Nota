import React from "react";

import styled from "styled-components";

const LeftBarWrapper = styled.div`
  position: absolute;
  left: 20px;
  width: 350px;
  height: 850px;
  background-color: red;
  z-index: 10;
`

export default function LeftBar() {
    return (
        <LeftBarWrapper className={"left-nav"}></LeftBarWrapper>
    )
}
