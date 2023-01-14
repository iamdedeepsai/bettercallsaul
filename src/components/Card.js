import "./Card.css";

function Card() {
    return (
        <div className="Card">
            <button className={"arrow"}><img src="public/chevron-left.svg"  alt={"arrow-left"}/></button>
            <img src="" alt="" className={""}/>
            <button className="arrow"><img src="public/chevron-right.svg" alt={"arrow-right"}/></button>
        </div>
    );
}

export default Card;