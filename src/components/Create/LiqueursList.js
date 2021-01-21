import React from "react";

import "./index.scss";

export default function LiqueursList(props) {
  return (
    <div class="recipe__form--radio">
      <div class="recipe__form--radio-container" value={props.ingredient} onChange={props.setIngredient}>
        <input id="Amaretto" name="ingredient" type="radio" value="Amaretto" />
        <label for="Amaretto">Amaretto</label>
        <input id="Aperol" name="ingredient" type="radio" value="Aperol" />
        <label for="Aperol">Aperol</label>
        <input id="Benedictine" name="ingredient" type="radio" value="Benedictine" />
        <label for="Benedictine">Benedictine</label>
        <input id="Campari" name="ingredient" type="radio" value="Campari" />
        <label for="Campari">Campari</label>
        <input id="Chambord" name="ingredient" type="radio" value="Chambord" />
        <label for="Chambord">Chambord</label>
        <input id="Chartreause" name="ingredient" type="radio" value="Chartreause" />
        <label for="Chartreause">Chartreause</label>
        <input id="Cointreau" name="ingredient" type="radio" value="Cointreau" />
        <label for="Cointreau">Cointreau</label>
        <input id="Creme de Cacao" name="ingredient" type="radio" value="Creme de Cacao" />
        <label for="Creme de Cacao">Creme de Cacao</label>
        <input id="Creme de Menthe" name="ingredient" type="radio" value="Creme de Menthe" />
        <label for="Creme de Menthe">Creme de Menthe</label>
        <input id="Cynar" name="ingredient" type="radio" value="Cynar" />
        <label for="Cynar">Cynar</label>
        <input id="Frangelico" name="ingredient" type="radio" value="Frangelico" />
        <label for="Frangelico">Frangelico</label>
        <input id="Galliano" name="ingredient" type="radio" value="Galliano" />
        <label for="Galliano">Galliano</label>
        <input id="Goldshlager" name="ingredient" type="radio" value="Goldshlager" />
        <label for="Goldshlager">Goldshlager</label>
        <input id="Grand Marnier" name="ingredient" type="radio" value="Grand Marnier" />
        <label for="Grand Marnier">Grand Marnier</label>
        <input id="Jagermeister" name="ingredient" type="radio" value="Jagermeister" />
        <label for="Jagermeister">Jagermeister</label>
        <input id="Kahlua" name="ingredient" type="radio" value="Kahlua" />
        <label for="Kahlua">Kahlua</label>
        <input id="Limoncello" name="ingredient" type="radio" value="Limoncello" />
        <label for="Limoncello">Limoncello</label>
        <input id="Southern Comfort" name="ingredient" type="radio" value="Southern Comfort" />
        <label for="Southern Comfort">Southern Comfort</label>
        <input id="Triple Sec" name="ingredient" type="radio" value="Triple Sec" />
        <label for="Triple Sec">Triple Sec</label>
      </div>
    </div>
  )
}