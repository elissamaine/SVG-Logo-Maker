class Square {
  constructor(data) {
    this.text = data.text;
    this.textColor = data.textColor;
    this.shapeColor = data.shapeColor;
  }

  render() {
    return `<svg version='1.1' 
  width='300' height='200' 
  xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="0" width="200" height="200" fill="${this.shapeColor}"/>

  <text x='110' y='110' font-size='85' text-anchor='middle' fill='${this.textColor}'>${this.text}</text>
  </svg>`
  };
};

module.exports = Square;