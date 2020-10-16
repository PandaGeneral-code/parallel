import { transform } from "framer-motion";
import React, { useCallback, useEffect, useRef, useState } from "react";

import Wrapper, { Content, Header } from "./styled";

const App = () => {
  const wrapperRef = useRef();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [wrapperDimensions, setWrapperDimensions] = useState(null);

  const handleScroll = useCallback(
    ({ target: { scrollHeight, scrollTop } }) => {
      setScrollProgress(() =>
        transform(
          scrollTop,
          [0, scrollHeight - wrapperDimensions.height],
          [0, 1]
        )
      );
    },
    [wrapperDimensions]
  );

  useEffect(() => {
    const wrapper = wrapperRef.current;
    wrapper.addEventListener("scroll", handleScroll);
    return () => {
      wrapper.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    setWrapperDimensions(() => wrapperRef.current.getBoundingClientRect());
  }, []);

  return (
    <Wrapper ref={wrapperRef}>
      <Header parentScroll={scrollProgress} />
      <Content />
    </Wrapper>
  );
};

export default App;
