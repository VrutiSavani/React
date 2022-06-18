import { useState } from "react";
import Input from "./Input";

function UserForm() {
    const [values, setValue] = useState<string>("")
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const val = e.currentTarget.value;
        setValue(val)
        return (
            <>
                <div>
                    <h1>First name</h1>
                    <Input  />
                </div>
                <div>
                    <h1>Last name</h1>
                    <input type="text" onChange={(e) => handleOnChange(e)} />
                </div>
            </>
        );
    }
}
    export default UserForm;