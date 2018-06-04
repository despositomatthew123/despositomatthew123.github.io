function Steroid(x,y) {
    this.x = x;
    this.y = y;
    this.r = 8;
    this.toDelete = false;

    this.show = function() {
        fill(100, 0, 900);
        ellipse(this.x, this.y, this.r, this.r*2);
    };
    this.move = function() {
        this.y = this.y - 4;
    };
    this.explosion = function() {
        this.toDelete = true;
    }

    this.hits = function(inhaber) {
        var d = dist(this.x, this.y, inhaber.x, inhaber.y);
        if (d < this.r + inhaber.r) {
            return true;
        } else {
            return false;
        }

        }
    }
