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

    Snake.prototype.show = function (map) {

        // 蛇的身体有几节，就创建几个div
        for (var i = 0; i < this.body.length; i++) {

            var div = document.createElement('div');
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

})(window);