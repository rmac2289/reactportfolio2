import { useState } from "react";

export const useToggle = (initial) => {
  const [isToggled, setToggle] = useState(initial);
  const toggle = () => setToggle((prevState) => !prevState);
  return { isToggled, setToggle, toggle };
  // return [] if you want to rename in component
};

// to use in component -

// const { isToggled, toggle } = useToggle(false)
