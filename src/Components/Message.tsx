import { useState } from "react";

interface Messageprops {
        onChange: (val: string) => void;
}
      const Message = ({ onChange }: Messageprops) => {
        const [value, setvalue] = useState<string>("");


function Message(props) {
    return (<>
        <h1> {props.msg}</h1>
    </>);
}

export default Message;