(function (w) {
    function Game() {
        this.snake = new Snake();
        this.food = new Food();

    }
    w.Game = Game;

    Game.prototype.startGame = function (map) {
        this.snake.show(map);
        this.food.show(map);
        var that = this;
        document.onkeydown = function (e) {
            e = e || window.event;
            switch (e.keyCode) {
                case 37:
                    if (that.snake.direction != 'right')
                        that.snake.direction = 'left';
                    break;
                case 38:
                    if (that.snake.direction != 'bottom')
                        that.snake.direction = 'top';
                    break;
                case 39:
                    if (that.snake.direction != 'left')
                        that.snake.direction = 'right';
                    break;
                case 40:
                    if (that.snake.direction != 'top')
                        that.snake.direction = 'bottom';
                    break;

            }
        }


        var timerID = setInterval(function () {
            that.snake.move();

            var header = that.snake.body[0];
            var maxX = map.offsetWidth / that.snake.width;
            var maxY = map.offsetHeight / that.snake.height;
            if (header.x >= maxX || header.x < 0 || header.y >= maxY || header.y < 0) {
                alert('Game Over')
                clearInterval(timerID);
                return;
            }
            if(header.x==that.food.x&&header.y==that.food.y){
                var lastUnit=that.snake.body[that.snake.body.length-1];
                that.snake.body.push(
                    {x:lastUnit.x,y:lastUnit.y,bgColor:that.food.bgColor}
                );
                that.food.show(map);
            }

            that.snake.show(map);
        }, 100);
    }
})(window);