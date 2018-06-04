function Inhaber(x,y) {
    this.x = x;
    this.y = y;
    this.r = 10;
    this.toDelete = false;

    this.show = function() {
        fill(100, 0, 900);
        ellipse(this.x, this.y, this.r*2, this.r*2);
    }
    this.grow = function() {
        this.r = this.r + .25;

    }
    this.move = function() {
        this.x += xvel;
    }
     this.explode = function() {
        if (this.r > 30) {
            this.toDelete = true;
        }
    }
}