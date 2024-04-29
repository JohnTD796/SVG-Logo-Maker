const {Shapes, Circle, Triangle, Square} = require('./shapes.js')

describe('Shapes', () => {
    describe('Circle', () => {
        it('should correctly display user input in the Circle class', () => {
            shapeColor = 'red';
            textColor = 'blue';
            logoText = 'JTD';
            const result = `<circle cx='150' cy='100' r='80' fill='red'></circle>
                <text x='150' y='125' font-size='60' text-anchor='middle' fill='blue'>JTD</text>`;
            const shape = new Circle(shapeColor, textColor, logoText);
            expect(shape.render()).toEqual(result)
        });
    });

    describe('Triangle', () => {
        it('should correctly display user input in the Triangle class', () => {
            shapeColor = 'red';
            textColor = 'blue';
            logoText = 'JTD';
            const result = `<polygon points='110,10 200,190 20,190' fill='red'></polygon>
                <text x='158' y='160' font-size='60' text-anchor='end' fill='blue'>JTD</text>`
            const shape = new Triangle(shapeColor, textColor, logoText);
            expect(shape.render()).toEqual(result)
        });
    });

    describe('Square', () => {
        it('should correctly display user input in the Square class', () => {
            shapeColor = 'red';
            textColor = 'blue';
            logoText = 'JTD';
            const result = `<rect width='150' height='150' x='10' y='10' fill='red' />
                <text x='135' y='110' font-size='60' text-anchor='end' fill='blue'>JTD</text>`
            const shape = new Square(shapeColor, textColor, logoText);
            expect(shape.render()).toEqual(result)
        });
    });
})