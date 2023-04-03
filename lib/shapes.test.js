const Shapes = require('./shapes.js');
const Circle = require('./shapes.js');
const Triangle = require('./shapes.js');
const Square = require('./shapes.js')

describe('Shapes', () => {

  describe('circle', () => {
    it('render an svg circle', () => {
      const shape = new Circle();
      shape.setColor('black');

      expect(shape.render()).toEqual(`<circle cx='150' cy='100' r='80' fill='black'/>`);
    });
  });

  describe('triangle', () => {
    it('render a svg triangle', () => {
      const shape = new Triangle();
      shape.setColor('black');

      expect(shape.render()).toEqual(`<polygon points='150, 18 244, 182 56, 182' fill='black'/>`);
    });
  });

  describe('square', () => {
    it('render a svg square', () => {
      const shape = new Square();
      shape.setColor('black');

      expect(shape.render()).toEqual(`<rect x="10" y="0" width="200" height="200" fill="black"/>`);
    });
  });

  describe('render shape', () => {
    it('should render the content of the whole svg file for the shape', () => {
      const logo = new Shapes();
      const shape = new Square();
      shape.setColor('black');
      logo.setText('EAM');

      expect(logo.render()).toEqual(`<svg version='1.1' 
      width='300' height='200' 
      xmlns="http://www.w3.org/2000/svg">
      
      <rect x="10" y="0" width="200" height="200" fill="black"/>
      
      <text x='110' y='110' font-size='85' text-anchor='middle' fill='white'>EAM</text>
        
      </svg>
      `)
    })
  })
});