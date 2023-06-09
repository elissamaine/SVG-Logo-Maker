const Square = require('./square');

test('properly render an svg square', () => {
  const shape = new Square({
    text: 'EAM',
    textColor: 'white',
    shape: 'square',
    shapeColor: 'black'
  });
  

  expect(shape.render()).toEqual(`<svg version='1.1' 
  width='300' height='200' 
  xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="0" width="200" height="200" fill="black"/>

  <text x='110' y='110' font-size='85' text-anchor='middle' fill='white'>EAM</text>
  </svg>`);
});