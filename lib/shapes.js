function renderShape(data) {
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
};

//function renderSvg(data) {
  //return `<svg version='1.1' 
  //width='300' height='200' 
  //xmlns="http://www.w3.org/2000/svg">
  
  //${renderShape(data.shape)}
    
  //</svg>`
//}


//module.exports = renderSvg;
module.exports = renderShape;