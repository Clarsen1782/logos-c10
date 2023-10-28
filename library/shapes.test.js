const {Triangle, Square, Circle} = require('./shapes');

describe('Triangle', () => {
    it('should create a Triangle object', () => {
        const triangle = new Triangle();
        expect(triangle).toBeInstanceOf(Triangle);
    });
    it('should render a valid SVG representation of a triangle', () => {
        const triangle = new Triangle();
        triangle.setColor("blue");
        const svgRep = triangle.render();
        expect(svgRep).toMatch('polygon points="150, 18 244, 182 56, 182" fill="blue"')
    });
});

describe('Square', () => {
    it('should create a Square object', () => {
        const square = new Square();
        expect(square).toBeInstanceOf(Square);
    });
    it('should render a valid SVG representation of a square', () => {
        const square = new Square();
        square.setColor("blue");
        const svgRep = square.render();
        expect(svgRep).toMatch('rect x="50" y="25" width="200" height="200" fill="blue"')
    });
});

describe('Circle', () => {
    it('should create a Circle object', () => {
        const circle = new Circle();
        expect(circle).toBeInstanceOf(Circle);
    });
    it('should render a valid SVG representation of a circle', () => {
        const circle = new Circle();
        circle.setColor("blue");
        const svgRep = circle.render();
        expect(svgRep).toMatch('circle cx="150" cy="100" r="90" fill="blue"')
    });
});