const {Circle, Triangle, Square} = require('./shapes')

function generateSVG(data) {
    let shape;
    switch (data.shape) {
        case 'Circle':
            shape = new Circle(data.shapeColor)
            break;
        case 'Triangle':
            shape = new Triangle(data.shapeColor)
            break;
        case 'Square':
            shape = new Square(data.shapeColor)
            break; 
    }
    
    if (shape instanceof Circle) {
        return `<svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='300' height='200'>
                ${shape.render()}
                <text x='150' y='125' font-size='60' text-anchor='middle' fill='${data.textColor}'>${data.logoText.slice(0, 3)}</text>
                </svg>`
    } else if (shape instanceof Triangle){
        return `<svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='300' height='200'>
                ${shape.render()}
                <text x='158' y='160' font-size='60' text-anchor='end' fill='${data.textColor}'>${data.logoText.slice(0, 3)}</text>
                </svg>`
    } else if (shape instanceof Square) {
        return `<svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='300' height='200'>
                ${shape.render()}
                <text x='135' y='110' font-size='60' text-anchor='end' fill='${data.textColor}'>${data.logoText.slice(0, 3)}</text>
                </svg>`
    }
}

module.exports = generateSVG;
