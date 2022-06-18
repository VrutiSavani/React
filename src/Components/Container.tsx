type Containerprops = {
    styles: React.CSSProperties
}


export const Container = (props: Containerprops) => {
    return (
        <div style={props.styles}>
            Vruti savani
        </div>
    )
}