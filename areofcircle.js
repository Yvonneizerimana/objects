let circle={
    radius:5,
  calculateArea : function (){
        area=Math.PI*this.radius*this.radius;
        return area;
    }
};
let result=console.log(circle.calculateArea());
