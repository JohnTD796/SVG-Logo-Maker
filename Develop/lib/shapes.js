class Shapes {
    constructor(shapeColor, textColor, logoText) {
        this.shapeColor = shapeColor,
        this.textColor = textColor,
        this.logoText = logoText
        console.log(this.logoText)
    }
    render() {
        return ''
    }
}

class Circle extends Shapes {
    render() {
        return `<circle cx='150' cy='100' r='80' fill='${this.shapeColor}'></circle>
                <text x='150' y='125' font-size='60' text-anchor='middle' fill='${this.textColor}'>${this.logoText}</text>`
    }
}

class Triangle extends Shapes {
    render(){
        return `<polygon points='110,10 200,190 20,190' fill='${this.shapeColor}'></polygon>
                <text x='158' y='160' font-size='60' text-anchor='end' fill='${this.textColor}'>${this.logoText}</text>`
    }
}

class Square extends Shapes {
    render(){
        return `<rect width='150' height='150' x='10' y='10' fill='${this.shapeColor}' />
                <text x='135' y='110' font-size='60' text-anchor='end' fill='${this.textColor}'>${this.logoText}</text>`
    }
}

module.exports = {Circle, Triangle, Square};