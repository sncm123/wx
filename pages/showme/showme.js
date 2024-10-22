Page({
  data: {
    snowflakes: [],  // 存储雪花的数组
    canvasWidth: 0,
    canvasHeight: 0,
  },
  
  onLoad: function () {
    const query = wx.createSelectorQuery();
    query.select('.canvas').boundingClientRect(res => {
      const canvasWidth = res.width;
      const canvasHeight = res.height;

      this.setData({
        canvasWidth,
        canvasHeight
      });

      // 初始化画布和雪花
      this.initCanvas(canvasWidth, canvasHeight);
      this.generateSnowflakes();
      this.animateSnowflakes();
    }).exec();
  },

  // 初始化画布
  initCanvas: function (canvasWidth, canvasHeight) {
    this.ctx = wx.createCanvasContext('snowCanvas');
    this.ctx.setFillStyle('white');
    this.setData({
      canvasWidth,
      canvasHeight
    });
  },

  // 生成雪花
  generateSnowflakes: function () {
    const snowflakes = [];
    for (let i = 0; i < 50; i++) {  // 随机生成50片雪花
      snowflakes.push({
        x: Math.random() * this.data.canvasWidth,  // x 轴位置
        y: Math.random() * this.data.canvasHeight, // y 轴位置
        radius: Math.random() * 4 + 1,  // 半径
        speed: Math.random() * 3 + 1,  // 下落速度
        swing: Math.random() * 2 - 1  // 左右摇摆的幅度
      });
    }
    this.setData({
      snowflakes
    });
  },

  // 绘制和更新雪花
  animateSnowflakes: function () {
    const snowflakes = this.data.snowflakes;
    const ctx = this.ctx;

    // 清空画布
    ctx.clearRect(0, 0, this.data.canvasWidth, this.data.canvasHeight);

    // 绘制每片雪花
    snowflakes.forEach(snowflake => {
      ctx.beginPath();
      ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2);
      ctx.setFillStyle('white');
      ctx.fill();

      // 更新雪花位置
      snowflake.y += snowflake.speed;
      snowflake.x += snowflake.swing;

      // 如果雪花超出底部则重置到顶部
      if (snowflake.y > this.data.canvasHeight) {
        snowflake.y = -snowflake.radius;
        snowflake.x = Math.random() * this.data.canvasWidth;
      }
    });

    ctx.draw();

    // 使用 requestAnimationFrame 实现循环动画
    wx.nextTick(() => {
      this.animateSnowflakes();
    });
  }
});
