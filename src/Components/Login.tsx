import { useState } from "react";
import  Message   from "./Message" 

function Login() {
    const [login, setLogin] = useState(false)
    
    const clickLogin = () => {
        setLogin(true)
    }

    const clickLogout = () => {
        setLogin(false)
    }
    if (login === false) {

        return ( 
            <>
                <Message msg="Login !!! 😊😊" />
                <button onClick={() => clickLogin()}> Login</button>               
            </>
        );
    }
    else {
            return (
                <>
                    <Message msg="Logout !!! 😒😒😒" />
                    <button onClick={() => clickLogout()}>Logout</button>
                </>
            )
    }
}

export default Login;