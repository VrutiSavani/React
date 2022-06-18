
function Unreadmessage(props: any) {
    const {messageArray}=props
    return (
        <>
            {
                messageArray.length > 0 ? <h1>you have {messageArray.length} un-read message</h1>:<h1>you have no messages left</h1>
        }
        </>
      );
}

export default Unreadmessage;