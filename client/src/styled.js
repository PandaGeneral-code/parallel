import styled from "styled-components";

import small from "./images/small.jpg";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 300%;
`;

export const Header = styled.div.attrs(({ parentScroll }) => ({
  style: {
    backgroundPosition: `50% ${50 + parentScroll * 350}%`,
  },
}))`
  background-image: url(${small});
  background-repeat: no-repeat;
  background-size: 125% 125%;
  height: 33%;
`;

const Wrapper = styled.div`
  box-sizing: border-box;
  height: 100%;
  overflow: hidden auto;
`;

export default Wrapper;
