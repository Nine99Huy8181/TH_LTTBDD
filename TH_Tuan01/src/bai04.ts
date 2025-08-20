class Rectangle {
    constructor(public width: number, public height: number) {}
    
    calculateArea(): number {
        return this.width * this.height;
    }
    
    calculatePerimeter(): number {
        return 2 * (this.width + this.height);
    }
}
