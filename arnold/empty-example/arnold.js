function Arnold() {
    this.x =  width/2;
    img = loadImage("Arnold.png");

    this.show = function() {
        fill(25, 0, 900);
        rect(this.x, height-20, 30, 40);
    };

    this.move = function(dir) {
        this.x += dir;
    };
}
