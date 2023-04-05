const Triangle = require('./triangle.js');

test('properly render an svg triangle', () => {
  const shape = new Triangle();
  shape.shapeColor = 'black';
  shape.text = 'EAM';
  shape.textColor = 'white';

  expect(shape.render()).toEqual(`<svg version='1.1' 
  width='300' height='200' 
  xmlns="http://www.w3.org/2000/svg">
  <polygon points='150, 18 244, 182 56, 182' fill='black'/>

  <text x="150" y="155" font-size="55" text-anchor="middle" fill="white">EAM</text>
  </svg>`);
});