const Circle = require('./circle.js');

test('properly render an svg circle', () => {
  const shape = new Circle({
    text: 'EAM',
    textColor: 'white',
    shape: 'circle',
    shapeColor: 'black'
  });

  expect(shape.render()).toEqual(`<svg version='1.1' 
  width='300' height='200' 
  xmlns='http://www.w3.org/2000/svg'>
  <circle cx='150' cy='100' r='80' fill='black'/>

  <text x='150' y='120' font-size='60' text-anchor='middle' fill='white'>EAM</text>
  </svg>`);
});
