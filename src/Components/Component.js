import React, { useState } from "react";
import './Component.css';
import './Cart.css';
import './Book.css';
import Book from "./Book.js";
import Cart from "./Cart.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';



const Component = () => {
    const [cart, setCart] = useState([]);
    const component = [
        {
            "_id": "625d9f553e8b02b0a94d9f46",
            "balance": 35.34,
            "picture": "https://i.harperapps.com/hcanz/covers/9780008182229/y648.jpg",
            "name": "THE ADVENTURE OF SHERLOCK HOLMES",
            "writer": "Sir Arthur Conan Doyle"
        },
        {
            "_id": "625d9f55ec195dba0f81e5e1",
            "balance": 27.73,
            "picture": "https://static-01.daraz.com.bd/p/141a8642ccbc71d04e9bef803048516b.jpg",
            "name": "THINK AND GROW RICH",
            "writer": "Napoleon Hill"
        },
        {
            "_id": "625d9f55f86a4f6acce04059",
            "balance": 19.73,
            "picture": "https://images-na.ssl-images-amazon.com/images/I/A1xkFZX5k-L.jpg",
            "name": "A BRIEF HISTORY OF TIME",
            "writer": "Stephen Hawkings"
        },
        {
            "_id": "625d9f553bc5ee851a62dbf0",
            "balance": 29.66,
            "picture": "https://static-01.daraz.com.bd/p/fee940080bb953f6348e9bcfd8b8e79d.jpg",
            "name": "THE 7 HABITS OF HIGHLY EFFECTIVE PEOPLE",
            "writer": "Stephen R. Covey"
        },
        {
            "_id": "625d9f55c5a3744478cb64c2",
            "balance": 23.64,
            "picture": "https://images-na.ssl-images-amazon.com/images/I/41A3imtffCL._SY344_BO1,204,203,200_.jpg",
            "name": "Ace the Data Science Interview: 201 Real Interview Questions",
            "writer": "Nick Singh & Kevin Huo "
        },
        {
            "_id": "625d9f55ac9883ec2bb203fd",
            "balance": 55.97,
            "picture": "https://images-na.ssl-images-amazon.com/images/I/51GcXOrWROL._SX379_BO1,204,203,200_.jpg",
            "name": "Hands-On Machine Learning with Scikit-Learn",
            "writer": "Aurélien Géron"
        },
        {
            "_id": "625d9f556589b1f42395c882",
            "balance": 53.30,
            "picture": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1412531897l/21887586.jpg",
            "name": "THOUGHTFUL MACHINE  LEARNING",
            "writer": "Matthew Krik"
        },
        {
            "_id": "625d9f55e2a24b99490888e7",
            "balance": 19.52,
            "picture": "https://images-na.ssl-images-amazon.com/images/I/51Ud06HEXxL._SX328_BO1,204,203,200_.jpg",
            "name": "Tinker, Tailor, Soldier, Spy",
            "writer": "John le Carré"
        },
        {
            "_id": "625d9f55e2a24b99490888e8",
            "balance": 28.52,
            "picture": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1560572715l/52186170._SX0_SY0_.jpg",
            "name": "PYTHON MACHINE LEARNING",
            "writer": "Django Smith"
        }
    ]


    const handleAddToCart = (component) => {
        const newCart = [...cart, component];
        setCart(newCart);
    }




    return (
        <div>
            <h1 id="k1" className="h1">Hello , Welcome to Simon's Book Store <span id="y1"><FontAwesomeIcon icon={faBook}></FontAwesomeIcon></span></h1>
            <div className="component_container">
                <div className="book">
                    <div className="book_container">{
                        component.map(component =>
                            <Book key={component._id}
                                handleAddToCart={handleAddToCart}
                                component={component}></Book>)
                    }
                    </div>
                </div>
                <div className="cart_container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>


        </div>
    );

};
export default Component;