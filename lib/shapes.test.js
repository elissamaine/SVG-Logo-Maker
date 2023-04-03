const Shapes = require('./shapes.js');
const Circle = require('./shapes.js');
const Triangle = require('./shapes.js');
const Square = require('./shapes.js')


test('properly render a svg circle', () => {
  const shape = new Circle();
  shape.setColor('black');
  shape.text = 'EAM'
  shape.text.setColor('white')

  expect(shape.render()).toEqual(`<circle cx='150' cy='100' r='80' fill='black'/>
  <text x="150" y="120" font-size="60" text-anchor="middle" fill="white">EAM</text>`);
});

test('properly render a svg triangle', () => {
  const shape = new Triangle();
  shape.setColor('black');
  shape.text = 'EAM'
  shape.text.setColor('white')

  expect(shape.render()).toEqual(`<polygon points='150, 18 244, 182 56, 182' fill='black'/>
  <text x="150" y="155" font-size="55" text-anchor="middle" fill="pink">EAM</text>`);
});

test('properly render a svg square', () => {
  const shape = new Square();
  shape.setColor('black');
  shape.text = 'EAM'
  shape.text.setColor('white')

  expect(shape.render()).toEqual(`<rect x="10" y="0" width="200" height="200" fill="black"/>
  <text x='110' y='110' font-size='85' text-anchor='middle' fill='white'>EAM</text>`);
});
