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


        // 监听键盘按下的键（添加键盘按下事件）
        document.onkeydown = function (e) {

            e = e || window.event;
            // 左37，上38，右39，下40
            // console.log(e.keyCode);

            switch (e.keyCode) {

                case 37: //左
                    if (that.snake.direction != 'right')
                        that.snake.direction = 'left';
                    break;
                case 38: //上
                    if (that.snake.direction != 'bottom')
                        that.snake.direction = 'top';
                    break;
                case 39: //右
                    if (that.snake.direction != 'left')
                        that.snake.direction = 'right';
                    break;
                case 40: //下
                    if (that.snake.direction != 'top')
                        that.snake.direction = 'bottom';
                    break;
            }

        }

        var timerID = setInterval(function () {

            // console.log(this); //在计时器里的this是window

            // 让蛇动一下，所以这里不能用this，要用之前保存出来的this
            that.snake.move();

            // 如果蛇头大于最大x或者小于0 以及蛇头y大于最大y或者y小于0，都要结束游戏
            // 取出蛇头
            var header = that.snake.body[0];

            // 算出最大x（是格子总数不是最大下标）
            var maxX = map.offsetWidth / that.snake.width;
            // 算出最大y
            var maxY = map.offsetHeight / that.snake.height;

            // 做判断
            if (header.x >= maxX || header.x < 0 || header.y >= maxY || header.y < 0) {

                alert('Game Over!');
                // 停止计时器
                clearInterval(timerID);
                return; //跳出此方法没必要往后执行
            }

            // 继续判断蛇头位置是否等于食物的位置
            if (header.x == that.food.x && header.y == that.food.y) {

                // 位置相同代表吃到了，就长身体：就用原来的最后一节身体位置
                // 先取出原来的最后一节
                var lastUnit = that.snake.body[that.snake.body.length - 1];

                that.snake.body.push( { x: lastUnit.x, 
                                        y: lastUnit.y, 
                                        bgColor: that.food.bgColor 
                                      } 
                                    );

                // 调用食物的重新显示方法
                that.food.show(map);
            }

            // 根据最新位置重新创建div
            that.snake.show(map);

        }, 50);
    }

})(window);