import Unreadmessage from "./Unreadmessage"

const messages = ["dfere","sdef","dhsg"];

function Mailbox() {
    return ( 
        <>
            <h1>Mail box</h1>
            <Unreadmessage messageArray={messages} />
        </>
     );
}

export default Mailbox;