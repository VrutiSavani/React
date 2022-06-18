type Statusprops = {
    status: 'Loading' | 'Success' | 'Error'; 
}

export const Status = (props: Statusprops) => {
    let message
    if (props.status === 'Loading') {
        message = 'Loading'
    } else if (props.status === 'Success') {
        message = 'Data fetched successfully'
    } else if (props.status === 'Error') {
        message = 'Error fetching data'
    } 
    return (
        <div>
            <h2>Status - {message}</h2> 
        </div>
    )
}
export default Status;