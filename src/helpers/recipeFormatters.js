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
    case 124 >= strength && strength >= 50:
      result = `Mild (${percent}%)`;
      break;
    case 249 >= strength && strength >= 125:
      result = `Medium (${percent}%)`;
      break;
    case 399 >= strength && strength >= 250:
      result = `Strong (${percent}%)`;
      break;
    case 1000 >= strength && strength >= 400:
      result = `Very Strong! (${percent}%)`;
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
      result = 'A dash of . . . ';
      break;
    case 0.49 >= amount && amount >= 0.26: 
      result = 'A splash of . . . ';
      break;
    case amount >= 0.5: 
      result = amount + ' oz of . . . ';
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
};

export const formatCategory = function(id, array) {
  let result = '';

  for (const i of array) {
    if (i.id === id) {
      result += i.name;
    }
  }
  return result;
};

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