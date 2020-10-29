(function (w) {
    var list = [];
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
    w.Snake = Snake;

    Snake.prototype.show = function (map) {
        var list = document.querySelectorAll('.snake')
        for (var i = 0; i < list.length; i++) {
            map.removeChild(list[i])
        }

        // 蛇的身体有几节，就创建几个div
        for (var i = 0; i < this.body.length; i++) {

            var div = document.createElement('div');
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
    Snake.prototype.move = function () {
        for (var i = this.body.length - 1; i >= 1; i--) {
            this.body[i].x = this.body[i - 1].x;
            this.body[i].y = this.body[i - 1].y;

        }
        var header = this.body[0];
        switch (this.direction) {
            case "left":
                header.x--;
                break;
            case "right":
                header.x++;
                break;
            case "top":
                header.y--;
                break;
            case "bottom":
                header.y++;
                break;

        }
    }
})(window);