// function renderShape(shape) {
//     switch (shape) {
//         case 'Circle':
//             return `<svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='300' height='200'>
//                     <circle cx='150' cy='100' r='80' fill='${shapeColor}></circle>
//                     <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${logoText}</text>
//                     </svg>`

//         case 'Triangle':
//             return `<svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='300' height='200'>
//                     <polygon points='110,10 200,190 20,190' fill='${shapeColor}'></polygon>
//                     <text x="158" y="160" font-size="60" text-anchor="end" fill="${textColor}">${logoText}</text>
//                     </svg>`

//         case 'Square':
//             return `<svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='300' height='200'>
//                     <rect width="150" height="150" x="10" y="10" fill="${shapeColor}" />
//                     <text x="135" y="110" font-size="60" text-anchor="end" fill="${textColor}">${logoText}</text>
//                     </svg>`
//     }
// }

function generateSVG(data) {
    switch (data.shape) {
        case 'Circle':
            return `<svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='300' height='200'>
                    <circle cx='150' cy='100' r='80' fill='${data.shapeColor}'></circle>
                    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.logoText}</text>
                    </svg>`

        case 'Triangle':
            return `<svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='300' height='200'>
                    <polygon points='110,10 200,190 20,190' fill='${data.shapeColor}'></polygon>
                    <text x="158" y="160" font-size="60" text-anchor="end" fill="${data.textColor}">${data.logoText}</text>
                    </svg>`

        case 'Square':
            return `<svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='300' height='200'>
                    <rect width="150" height="150" x="10" y="10" fill="${data.shapeColor}" />
                    <text x="135" y="110" font-size="60" text-anchor="end" fill="${data.textColor}">${data.logoText}</text>
                    </svg>`
    }
    // return renderShape(data.shape)
}

module.exports = generateSVG;

