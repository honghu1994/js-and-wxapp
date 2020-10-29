(function(w){

    // 游戏管家
    function Game(){

        this.snake = new Snake();
        this.food = new Food();
    }

    w.Game = Game;

    // 原型方法：开始游戏的方法
    Game.prototype.startGame = function(map){

        // 把蛇和食物显示出来
        this.snake.show(map);
        this.food.show(map);
    }

})(window);