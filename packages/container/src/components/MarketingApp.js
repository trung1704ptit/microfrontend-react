import { mount } from "marketing/MarketingApp";
import React, { useRef, useEffect } from "react";

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    // pass HTML element to mount function
    mount(ref.current);
  }, []);

  return <div ref={ref}></div>;
};
