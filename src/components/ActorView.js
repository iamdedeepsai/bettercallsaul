import "./ActorView.css";

function ActorView(props) {
    const src = props.source;
    const alt = props.altTitle;
    let effect = "";
    if (props.waiting) effect = "glitch ";

    //todo: Show glitch when loading

    return (
        <div className={"grid grid-cols-1"}>
            <div className="glitch-wrapper">
                <div className={effect + "text-white/80 hover:text-white/100 mb-5 text-xl font-semibold hover:font-bold ease-in duration-200"} data-glitch={alt}>{alt}</div>
            </div>
            <img src={src} alt={alt} style={{width: 300}} className={"rounded-lg drop-shadow-lg"}/>
        </div>
    );
}

export default ActorView;