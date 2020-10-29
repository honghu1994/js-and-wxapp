(function (w) {

    var list = [];

    // 蛇也写一个构造函数
    function Snake(width, height) {

        this.width = width || 20;
        this.height = height || 20;
        // 蛇其实还有个很重要的属性：方向
        this.direction = 'right';

        // 蛇其实是由多个格子组成，所以应该是一个数组
        // 每个格子有自己的x,y和颜色，所以应该是一个对象
        // 所以数组中每个元素又是一个对象
        this.body = [
            { x: 3, y: 1, bgColor: 'red' },
            { x: 2, y: 1, bgColor: 'green' },
            { x: 1, y: 1, bgColor: 'orange' },
        ];
    }

    //暴露给window
    w.Snake = Snake;

    // 显示出蛇的方法
    Snake.prototype.show = function (map) {

        // 在创建新的蛇的div之前，先把之前的蛇的div清空
        var list = document.querySelectorAll('.snake');
        for(var i = 0; i < list.length; i++){

            map.removeChild(list[i]);
        }

        // 蛇的身体有几节，就创建几个div
        for (var i = 0; i < this.body.length; i++) {

            var div = document.createElement('div');
            // 把蛇div加一个类，方便找到蛇的div
            div.className = "snake";
            // 设置宽高颜色
            div.style.width = this.width + "px";
            div.style.height = this.height + "px";
            div.style.backgroundColor = this.body[i].bgColor;

            // 设置位置
            div.style.position = "absolute";
            div.style.left = this.body[i].x * this.width + "px";
            div.style.top = this.body[i].y * this.height + "px";

            map.appendChild(div);
        }
    }

    // 蛇移动的方法
    Snake.prototype.move = function () {

        // 从后往前去动
        // 注意：蛇头移动的逻辑是不一样的，你这个循环只是移动身体，所以不要包含下标0，因为下标0是蛇头
        for (var i = this.body.length - 1; i >= 1; i--) {

            // 当前遍历的身体的x 要等于 它上一节的x
            this.body[i].x = this.body[i - 1].x;
            // 当前遍历的身体的y 要等于 它上一节的y
            this.body[i].y = this.body[i - 1].y;
        }

        // 取出蛇头
        var header = this.body[0];
        // 单独移动蛇头，蛇头要根据方向移动
        switch (this.direction) {

            case "left":
                // 让蛇头的x--
                header.x--;
                break;

            case "right":
                header.x++;
                break;

            case "top":
                header.y--;
                break;

            case "botton":
                header.y++;
                break;
        }

    }

})(window);