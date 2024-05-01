class Shapes {
    constructor(shapeColor) {
        this.shapeColor = shapeColor
    }
    render() {
        return ''
    }
}

class Circle extends Shapes {
    render() {
        console.log('test')
        return `<circle cx='150' cy='100' r='80' fill='${this.shapeColor}'></circle>`
    }
}

class Triangle extends Shapes {
    render(){
        return `<polygon points='110,10 200,190 20,190' fill='${this.shapeColor}'></polygon>`
    }
}

class Square extends Shapes {
    render(){
        return `<rect width='150' height='150' x='10' y='10' fill='${this.shapeColor}'></rect>`
    }
}

module.exports = {Circle, Triangle, Square};