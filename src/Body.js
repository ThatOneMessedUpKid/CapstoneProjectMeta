import React from "react";
function Body(){
    return(
    <>
    <img src="C:\Users\ranaa\OneDrive\Desktop\Capstone Project Meta\little_lemon_app\Images and logos\restauranfood.jpg" alt=""></img>
    <h1>Little Lemon</h1>
    <h3>Chicago</h3>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <button>Reserve a table</button>
        <h1>This weeks specials!</h1>
        <button class="online_menu">Online Menu</button>
        <div class="row">
         <div class="column">
            <img src="C:\Users\ranaa\OneDrive\Desktop\Capstone Project Meta\little_lemon_app\Images and logos\greek salad.jpg" alt=""></img>
            <h3>Greek Salad</h3>
            <h3>$12.99</h3>
            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary crutons.</p>
            <a href="/">order a delivery</a>
         </div>
         <div class="column">
           <h3>Bruschetta</h3>
           <h3>$5.99</h3>
           <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
           <a href="/">order a delivery</a>
         </div>
         <div class="column">
            <img src="C:\Users\ranaa\OneDrive\Desktop\Capstone Project Meta\little_lemon_app\Images and logos\lemon dessert.jpg" alt=""></img>
            <h3>Lemon Dessert</h3>
            <h3>$5.00</h3>
            <p>This comes straight from grandma's recipe book,every last ingredient has been sourced and is as authentic as can be imagined.</p>
            <a href="/">order a delivery</a>
         </div>
        </div>
    </>
    );
}
export default Body;