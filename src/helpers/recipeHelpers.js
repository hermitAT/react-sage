const getNamesAndAmounts = function(ingredients) {
  let ing_names_amounts = [];
  for (const ingredient of ingredients) {
    for (const id in ingredient) {
      ing_names_amounts.push({
        id: id, 
        name: Object.keys(ingredient[id])[0],
        amount: Object.values(ingredient[id])[0]
      })
    }
  }
  return ing_names_amounts;
};


const TemporaryHelperForFlavourIDS = function(flavour_id) {
  const flavours = [
    {
        "id": 1,
        "name": "Sweet"
    },
    {
        "id": 2,
        "name": "Sour"
    },
    {
        "id": 3,
        "name": "Salty"
    },
    {
        "id": 4,
        "name": "Spicy"
    },
    {
        "id": 5,
        "name": "Bitter"
    }
  ];
  for (const flavour of flavours) {
    if (flavour.id === flavour_id) return flavour.name
  }
}

const getInstruction = function(str) {
  return str.slice(1, -1).replace(/"/g, '').split(', ');
}

const strengthWordize = function(strength, reverse = false) {
  const map = {
    "Weak": [0, 50],
    "Mild": [50, 100],
    "Medium": [100, 200],
    "Strong": [200, 350],
    "Very strong!": [350, 1000]
  };

  if (reverse) {
    for (const key in map) {
      console.log(key, strength)
      if (strength.replace(/_/,'').toLowerCase() === key.replace(/!| /g,'').toLowerCase()) return map[key];
    }
    return 0;
  }

  for (const type in map) {
    if (strength === 0) return "Non-alcohol";
    if ((strength > map[type][0]) && (strength <= map[type][1])) return type;
  }
  return 'Out of range!'
}

const likeness = function(strength) {
  const map = [
  ['water', 0],
  ['diluted beer', 10],
  ['light beer', 45],
  ['beer', 60],
  ['wine', 175],
  ['vodka', 400],
  ['Pure alcohol', 1000]
  ];

  for (let i = 1; i < map.length; i++) {
    if (strength === 0) return 'Water';
    if ((strength > map[i-1][1]) && (strength <= map[i][1])) {
      const position = (strength - map[i-1][1]) / (map[i][1] - map[i-1][1])
      if (position < 0.5) return map[i-1][0];
      return map[i][0];
    }
  }
};

module.exports = { getNamesAndAmounts, getInstruction, strengthWordize, likeness, TemporaryHelperForFlavourIDS }