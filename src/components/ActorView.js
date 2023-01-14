function ActorView(props) {
    const src = props.source;
    const alt = props.altTitle;

    return (
        <div className={"h-100"}>
            <img src={src} alt={alt} className={""}/>
        </div>
    );
}

export default ActorView;