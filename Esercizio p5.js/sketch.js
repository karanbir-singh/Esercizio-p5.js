let b
const canvasX = 600
const canvasY = 600
let v0
let v1
let balls

class Ball {
    constructor(x,y) {
        this.position = createVector(x,y)
        this.vel = createVector(random(-5,5),random(-5,5))
        this.diam = random(10,30)
        this.myColorR = random(0,255)
        this.myColorG = random(0,255)
        this.myColorB = random(0,255)
    }

    draw() {
        //disegna cerchio
        fill(this.myColorR,this.myColorG,this.myColorB);
        circle(this.position.x, this.position.y,this.diam)
        drawArrow(this.position.x,this.position.y,10,this.myColorR,this.myColorG,this.myColorB)
    }

    move() {
        this.position.add(this.vel)
        if(this.position.x < 0+this.diam/2 || this.position.x >= canvasX-this.diam/2){
            this.vel.x = -this.vel.x
        }
        if(this.position.y < 0+this.diam/2 || this.position.y >= canvasY-this.diam/2){
            this.vel.y = -this.vel.y
        }
    }
}


function setup() {
    balls = []
    createCanvas(canvasX, canvasY);
    b = new Ball(canvasX/2,canvasY/2)
    balls.push(b)
    
  }
  
  function draw() {
    background(0);
    let i = 0
    for(let i=0; i<balls.length; i++){  
        balls[i].draw()
        balls[i].move()
    }
  } 

  function drawArrow(x,y,length,r,g,b) {
    this.length = length
    let a = atan2(mouseY-y,mouseX-x)
    push();
    stroke(r,g,b)
    strokeWeight(3)
    fill(r,g,b)
    circle(mouseX,mouseY,5);
    line(x,y,mouseX,mouseY)
    
    pop();
  }

  function mouseClicked() {
    a = new Ball(mouseX,mouseY)
    balls.push(a)
  }