(function (w) {

    // 游戏管家
    function Game() {

        this.snake = new Snake();
        this.food = new Food();
    }

    w.Game = Game;

    // 原型方法：开始游戏的方法
    Game.prototype.startGame = function (map) {

        // 把蛇和食物显示出来
        this.snake.show(map);
        this.food.show(map);

        //我们想用外面的this，就保存一下
        var that = this;

        setInterval(function () {

            // console.log(this); //在计时器里的this是window

            // 让蛇动一下，所以这里不能用this，要用之前保存出来的this
            that.snake.move();
            // // 根据最新位置重新创建div
            that.snake.show(map);

        }, 100);
    }

})(window);