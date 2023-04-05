/*function renderShape(data) {
  if (data.shape === 'circle') {
    return `<svg version='1.1' 
    width='300' height='200' 
    xmlns="http://www.w3.org/2000/svg">
    <circle cx='150' cy='100' r='80' fill='${data.shapeColor}'/>

    <text x="150" y="120" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
    </svg>`
  } else if (data.shape === 'triangle') {
    return `<svg version='1.1' 
    width='300' height='200' 
    xmlns="http://www.w3.org/2000/svg">
    <polygon points='150, 18 244, 182 56, 182' fill='${data.shapeColor}'/>

    <text x="150" y="155" font-size="55" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
    </svg>`
  } else if (data.shape === 'square') {
    return `<svg version='1.1' 
    width='300' height='200' 
    xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="0" width="200" height="200" fill="${data.shapeColor}"/>

    <text x='110' y='110' font-size='85' text-anchor='middle' fill='${data.textColor}'>${data.text}</text>
    </svg>`
  };
};*/

class Circle {
  constructor(text, textColor, shape, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shape = shape;
    this.shapeColor = shapeColor;
  }

  render() {
    return `<svg version='1.1' 
  width='300' height='200' 
  xmlns='http://www.w3.org/2000/svg'>
  <circle cx='150' cy='100' r='80' fill='${this.shapeColor}'/>

  <text x='150' y='120' font-size='60' text-anchor='middle' fill='${this.textColor}'>${this.text}</text>
  </svg>`
  };
};

/*class Triangle {
  constructor(text, textColor, shape, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shape = shape;
    this.shapeColor = shapeColor;
  }

  render() {
    return `<svg version='1.1' 
  width='300' height='200' 
  xmlns="http://www.w3.org/2000/svg">
  <polygon points='150, 18 244, 182 56, 182' fill='${this.shapeColor}'/>

  <text x="150" y="155" font-size="55" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
  </svg>`
  };
};

class Square {
  constructor(text, textColor, shape, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shape = shape;
    this.shapeColor = shapeColor;
  }

  render() {
    return `<svg version='1.1' 
    width='300' height='200' 
    xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="0" width="200" height="200" fill="${this.shapeColor}"/>

    <text x='110' y='110' font-size='85' text-anchor='middle' fill='${this.textColor}'>${this.text}</text>
    </svg>`
  };
};*/

module.exports = Circle;
//module.exports = Triangle;
//module.exports = Square;