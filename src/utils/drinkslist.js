import React from "react";

const drinksList = [
    {bev: "Americano", price: "2.50", imgURL: "https://upload.wikimedia.org/wikipedia/commons/0/09/Hokitika_Cheese_and_Deli%2C_Hokitika_%283526706594%29.jpg"},
    {bev: "Cappuccino", price: "3.00", imgURL: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Cappuccino_at_Sightglass_Coffee.jpg"},
    {bev: "Latte", price: "3.00", imgURL: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Latte_art_3.jpg"},
    {bev: "Mocha", price: "3.50", imgURL: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Mocha_coffee.jpg"},
    {bev: "Espresso", price: "2.00", imgURL: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg"},
    {bev: "Espresso Macchiato", price: "2.50", imgURL: "https://thelittlestcrumb.com/wp-content/uploads/espresso-macchiato-featured-image-1.jpg"},
    {bev: "Chai Latte", price: "3.00", imgURL: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chai-latte-4e5fe2f.jpg"}
]

export default function DrinksItem() {
    return(
        <div class="card" style={{maxWidth: 300 + "px", maxHeight: 300 + "px"}}>
            {drinksList.map((index) => (
                <div key={index} class="card" >
                <div class="card-image">
                  <figure class="image" >
                    <img src={index.imgURL} alt={index.bev} style={{maxWidth: 200 + "px", maxHeight: 200 + "px"}}/>
                  </figure>
                </div>
                <div class="card-content">
                <div class="content">
                <h2 class="title">{index.bev}</h2>
                <p class="subtitle">£{index.price}</p>
                </div>
                </div>
                <footer class="card-footer">
                <button class="card-footer-item">-</button>
                <button class="card-footer-item">+</button>
                </footer>
                </div>
            ))};
        </div>
    );
}

