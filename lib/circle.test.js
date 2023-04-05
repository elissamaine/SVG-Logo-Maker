//const Shapes = require('./shapes.js');
const Circle = require('./circle.js');
//const Triangle = require('./shapes.js');
//const Square = require('./shapes.js')


test('properly render an svg circle', () => {
  const shape = new Circle();
  shape.shapeColor = 'black';
  shape.text = 'EAM';
  shape.textColor = 'white';

  expect(shape.render()).toEqual(`<svg version='1.1' 
  width='300' height='200' 
  xmlns='http://www.w3.org/2000/svg'>
  <circle cx='150' cy='100' r='80' fill='black'/>

  <text x='150' y='120' font-size='60' text-anchor='middle' fill='white'>EAM</text>
  </svg>`);
});
/*
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

test('properly render an svg square', () => {
  const shape = new Square();
  shape.shapeColor = 'black';
  shape.text = 'EAM';
  shape.textColor = 'white';

  expect(shape.render()).toEqual(`<svg version='1.1' 
  width='300' height='200' 
  xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="0" width="200" height="200" fill="black"/>

  <text x='110' y='110' font-size='85' text-anchor='middle' fill='white'>EAM</text>
  </svg>`);
});
*/