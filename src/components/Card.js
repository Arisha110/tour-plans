import { useState } from "react";

function Card({ id, name, info, image, price, removeTour }) {

    const [readmore, setReadmore] = useState(false);
    const description = readmore ? info : `${info.substring(0, 200)}....`;

    function readmoreHandler() {
        setReadmore(!readmore)
    }


    return (
        <div className="card">
            <img src={image} className="image"></img>

            <div className="tour-details">
                <h4 className="tour-price">$ {price}</h4>
                <h4 className="city-name">{name}</h4>



                <p className="description"> {description}
                    <span className="read-more" onClick={readmoreHandler}>
                        {readmore ? `show less` : `read more`}
                    </span>
                </p>
            </div>

            <div className="card-btn">
                <button className="btnbtn" onClick={() => removeTour(id)}>Not Interested</button>
            </div></div>
    );
}
export default Card;