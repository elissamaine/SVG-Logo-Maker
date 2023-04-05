const inquirer = require('inquirer');
const fs = require('fs');
const CircleTemp = require('./lib/circle');
const TriangleTemp = require('./lib/triangle');
const SquareTemp =require('./lib/square');

inquirer
  .prompt([
    {
      type:'input',
      name:'text',
      message: 'Enter the 3 characters you want in your logo:'
    },
    {
      type: 'input',
      name: 'textColor',
      message:'What color do you want your text to be? (enter color name or hexadecimal number)'
    },
    {
      type: 'list',
      name: 'shape',
      message: 'What shape do you want your logo to be?',
      choices: ['circle', 'triangle', 'square']
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'What color do you want your shape to be? (enter color name or hexadecimal number)'
    }
  ])

  .then((data) => {
    if(data.shape === 'circle') {
      const svgTemplate = new CircleTemp(data);
      
      fs.writeFile('logo.svg', svgTemplate.render(data), (err) => 
      err ? console.log(err) : console.log('Generated logo.svg')
      );

    } else if (data.shape === 'triangle') {
      const svgTemplate = new TriangleTemp(data);

      fs.writeFile('logo.svg', svgTemplate.render(data), (err) => 
      err ? console.log(err) : console.log('Generated logo.svg')
      );

    } else if (data.shape === 'square') {
      const svgTemplate = new SquareTemp(data);

      fs.writeFile('logo.svg', svgTemplate.render(data), (err) => 
      err ? console.log(err) : console.log('Generated logo.svg')
      );
    };
    
  });

