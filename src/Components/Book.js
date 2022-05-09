import React from "react";
import './Component.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Book = (props) => {

    return (
        <div id="p2" className="book_border">
            <img id="p1" className="img_property" src={props.component.picture}></img>
            <div className="book_info" >
                <h2>Name: <p><span className="h2_special">{props.component.name}</span></p></h2>
                <p className="p1_s2">Writer: <span className="p1_s1">{props.component.writer}</span></p>
                <p className="p1_s2">Price: $ <span className="p1_s3">{props.component.balance}</span></p>
                {/* <p className="special_1"><small >rating: </small></p> */}
            </div>
            <button onClick={() => props.handleAddToCart(props.component)} className="btn_details">
                <p>Add to cart  <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></p>

            </button>
        </div>

    );
};
export default Book;