const {Shapes, Circle, Triangle, Square} = require('./shapes.js')

describe('Shapes', () => {
    describe('Circle', () => {
        it('should correctly display user input in the Circle class', () => {
            shapeColor = 'red';
            const result = `<circle cx='150' cy='100' r='80' fill='red'></circle>`
            const shape = new Circle(shapeColor);
            expect(shape.render()).toEqual(result)
        });
    });

    describe('Triangle', () => {
        it('should correctly display user input in the Triangle class', () => {
            shapeColor = 'red';
            const result = `<polygon points='110,10 200,190 20,190' fill='red'></polygon>`
            const shape = new Triangle(shapeColor);
            expect(shape.render()).toEqual(result)
        });
    });

    describe('Square', () => {
        it('should correctly display user input in the Square class', () => {
            shapeColor = 'red';
            const result = `<rect width='150' height='150' x='10' y='10' fill='red'></rect>`
            const shape = new Square(shapeColor);
            expect(shape.render()).toEqual(result)
        });
    });
})
