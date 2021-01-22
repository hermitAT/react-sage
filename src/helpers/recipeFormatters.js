export const formatStrength = function(strength) {
  let result = '';
  const percent = strength / 10;

  switch(true) {
    case strength === 0:
      result = 'Non-Alcoholic';
      break;
    case 49 >= strength && strength >= 1:
      result = `Weak (${percent}%)`;
      break;
    case 99 >= strength && strength >= 50:
      result = `Mild (${percent}%)`;
      break;
    case 249 >= strength && strength >= 100:
      result = `Medium (${percent}%)`;
      break;
    case 500 >= strength && strength >= 250:
      result = `Strong (${percent}%)`;
      break;
    case 1001 >= strength && strength >= 500:
      result = `Very Strong (${percent}%)`;
      break;
    default:
      result = '';
      break;
  }
  return result;
};

export const formatAmount = function(amount) {
  let result = '';

  switch(true) {
    case 0.25 >= amount && amount >= 0:
      result = 'dash';
      break;
    case 0.49 >= amount && amount >= 0.26: 
      result = 'splash';
      break;
    case amount >= 0.50: 
      result = amount + 'oz';
      break;
    default:
      result = '';
      break;
  }
  return result;
};

export const formatFlavour = function(id, array) {
  let result = '';

  for (const i of array) {
    if (i.id === id) {
      result += i.name;
    }
  }
  return result;
}

export const formatIngredients = function(ingredients) {
  let result = [];
  
  for (const ingredient of ingredients) {
    for (const key in ingredient) {
      result.push({
        name: Object.keys(ingredient[key])[0],
        amount: Object.values(ingredient[key])[0]
      });
    }
  };
  return result;
};

export const formatRating = function(rating) {
  if (rating === null) {
    return 0;
  } else {
    return parseInt(rating).toFixed(2)
  }
};