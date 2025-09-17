class Rectangle {

    constructor(width , height , color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    area(){
        const area = this.width * this.height;
        console.log("I am in area");
        return area;
    }

    print() {
         console.log("Hii I am in Rectangle class");
    }
}

const area = new Rectangle(10 , 20 , "red");
const res = area.area();
console.log(res);