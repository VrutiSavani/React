import React from "react";

type Buttonprops = {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

export const Button = (props: Buttonprops) => {
  return <button onClick={(e) => props.handleClick(e, 1)}>Click here</button>;
};
export default Button;
