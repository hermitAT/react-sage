import { render } from "@testing-library/react";
import React from "react";
import "./index.scss";
import logo from "./logo192.png"

export default function User(props) {

   return (
     <div>
       <div id="title-page" class="text-container0">
         <h2>This is User Page</h2>
       </div>
       <div class = "flex-container">
         <div id="image-description">
           <img src={logo} />
           <article class='text-container1'>
             jointed CocktailSage : 10 days ago  <br/>
             recipes created : 3  <br/>
             recipe favorite : 3  <br/>
                     
           </article>
         </div>
         <div id="recipe-favorite">
           <h3 class="text-container2">My recipe</h3>
           <h3 class="text-container3">My favorite recipe</h3>
         </div>
       </div>

     </div>



  ); 
  } 
