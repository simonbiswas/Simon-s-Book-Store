import React from "react";
import './Cart.css';
import './Component.css';
import Component from "./Component.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';



const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    const randomFinal = "";
    let randomItem;
    const randomBook = () => {
        randomItem = cart[Math.floor(Math.random() * cart.length)];
        document.getElementById("yo2").innerHTML = "Random Book: " + randomItem.name;
        document.getElementById("yoyo").innerHTML = "";
        document.getElementById("s1").innerHTML = "Total selected items: 1";
        document.getElementById("s2").innerHTML = "Total cost : $" + randomItem.balance.toFixed(2) + " (including tax)";
    }
    const paymentMethod = () => {
        document.getElementById("q1").innerHTML = " VISA/Master Card <button>Confirm</button></input>"
        document.getElementById("q2").innerHTML = " Cash On Delivery <button>Confirm</button></input>";
    }


    for (const book of cart) {
        total = total + book.balance;
    }
    return (
        <div id="p3" className="cart_details">

            <h2>Order Summary</h2>
            <p id="s1" className="p1_s1">Total selected items: {cart.length}</p>
            <p id="s2" className="p1_s3">Total cost : $ {total.toFixed(2)}<span className="p1_s3"> (including tax)</span></p>
            <p id="yoyo"><span className="p1_s4">Selected Books: </span> {
                cart.map(cart => <p>{cart.name}</p>)
            }
            </p>
            {/* <button id="k2" onClick={() => chooseAgain()} className="btn_details btn_special"> Choose again</button>
            <p></p> */}

            <button id="k2" onClick={() => randomBook()} className="btn_details btn_special"> Randomly choose 1 book for me</button>
            <p id="yo2"></p>
            <button id="k2" onClick={() => paymentMethod()} className="btn_details btn_special"> Proceed to Pay Bill</button>
            <p id="q1"></p>
            <p id="q2"></p>

        </div>
    );

}
export default Cart;