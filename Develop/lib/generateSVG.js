const {Circle, Triangle, Square} = require('./shapes')

function generateSVG(data) {
    let shape;
    switch (data.shape) {
        case 'Circle':
            shape = new Circle(data.shapeColor, data.textColor, data.logoText.slice(0, 3))
            break;
        case 'Triangle':
            shape = new Triangle(data.shapeColor, data.textColor, data.logoText.slice(0, 3))
            break;
        case 'Square':
            shape = new Square(data.shapeColor, data.textColor, data.logoText.slice(0, 3))
            break; 
    }
    
    if (shape instanceof Circle) {
        return `<svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='300' height='200'>
                ${shape.render()}
                </svg>`
    } else if (shape instanceof Triangle){
        return `<svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='300' height='200'>
                ${shape.render()}
                </svg>`
    } else if (shape instanceof Square) {
        return `<svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='300' height='200'>
                ${shape.render()}
                </svg>`
    }
}

module.exports = generateSVG;
