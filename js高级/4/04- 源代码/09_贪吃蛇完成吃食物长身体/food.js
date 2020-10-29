(function (w) {

    var list = [];

    // 因为以后可能会要创建多个食物对象，为了能快速创建，所以最好准备一个构造函数
    function Food(width, height, bgColor, x, y) {
        // 为了防止别人不传参数，所以用一个||，来给默认值
        // 如果不传，就会给20，传了就是传多少就是多少
        this.width = width || 20;
        this.height = height || 20;
        this.bgColor = bgColor || 'green';
        this.x = x || 0;
        this.y = y || 0;
    }

    // 都相当于把这个Food构造函数暴露给window
    w.Food = Food;

    // 让每个食物对象都有show方法（也就是把自己显示出来）
    // 你要让食物显示出来，是不是要告诉别人在哪显示出来
    // 所以应该传一个地图对象进来
    Food.prototype.show = function (map) {

        // 创建之前删掉原来的
        var list = document.querySelectorAll('.food');
        for (var i = 0; i < list.length; i++) {

            map.removeChild(list[i]);
        }

        // 创建一个div
        var div = document.createElement('div');
        div.className = "food";
        div.style.width = this.width + "px";
        div.style.height = this.height + "px";
        div.style.backgroundColor = this.bgColor;
        div.style.position = "absolute";

        // 先要用地图的宽度除以食物的宽度，算出一行能放多少个食物，例如一共能放30个食物，那么就有30个小格子
        // 下标就是0-29
        var maxX = map.offsetWidth / this.width;
        // 生成随机x（水平方向的下标）
        this.x = parseInt(Math.random() * maxX);

        // 用地图的高度除以食物的高度，算出垂直能放多少个食物，例如一共能放25个食物，就有25个格子（垂直方向）
        // 下标就是0-24
        var maxY = map.offsetHeight / this.height;
        // 生成随机垂直方向的下标
        this.y = parseInt(Math.random() * maxY);

        // 不要直接给x，y，因为x，y仅仅只是下标，还要用x乘以食物宽度得到真正的left
        // 还用y乘以食物的高度，得到真正的top
        div.style.left = this.x * this.width + "px";
        div.style.top = this.y * this.height + "px";

        map.appendChild(div);
    }

})(window);