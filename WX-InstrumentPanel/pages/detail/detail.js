Page({
  data: {
    width: 0,
    height: 0
  },
  onLoad: function (options) {
    var that = this
    //获取系统信息  
    wx.getSystemInfo({
      //获取系统信息成功，将系统窗口的宽高赋给页面的宽高  
      success: function (res) {
        that.width = res.windowWidth
        // console.log(that.width)   375
        that.height = res.windowHeight
        // console.log(that.height)  625
        // 这里的单位是PX，实际的手机屏幕有一个Dpr，这里选择iphone，默认Dpr是2
      }
    })
  },
  onReady: function () {
    this.drawClock();
    // 每40ms执行一次drawClock()，人眼看来就是流畅的画面
    //this.interval = setInterval(this.drawClock, 40);
  },
  // 所有的canvas属性以及Math.sin,Math.cos()等涉及角度的参数都是用弧度表示
  // 时钟
  drawClock: function () {
    const ctx = wx.createCanvasContext('clock');
    var height = this.height;
    var width = this.width;
    var R = width / 2 - 60;
    var value = 75;
    console.log(height + '.....' + width)
    ctx.clearRect(0, 0, width, height); //清除画布   
    ctx.beginPath(); //画笔开始            
    ctx.setLineWidth(5); //设置画笔的线宽    
    ctx.setStrokeStyle('black'); //设置画笔的颜色           
    ctx.arc(width / 2, height/2, R, 1.5 * Math.PI, 3.5 * Math.PI, false); //绘制圆形，坐标250,250 半径200，整圆（0-360度），false表示顺时针     
    ctx.stroke(); //绘图            
    ctx.closePath(); //结束画布  
    ctx.setLineWidth(6); //设置画笔的线宽   
    ctx.beginPath(); //画笔开始            
    ctx.setStrokeStyle('red'); //设置画笔的颜色        
    ctx.arc(width / 2, height / 2, R, 1.5 * Math.PI, (value * 2 / 100 + 1.5) * Math.PI, false); //绘制圆形，坐标250,250 半径200，整圆（0-360度），false表示顺时针     
    ctx.stroke(); //绘图            
    ctx.closePath(); //结束画布               

    //分针刻度               
    for (var i = 0; i < 100; i++) {
      ctx.save();
      ctx.setLineWidth(3);
      ctx.setStrokeStyle('red');
      if (i > value) {
        ctx.setStrokeStyle('black');
      }
      ctx.translate(width / 2, height / 2);
      ctx.rotate(i * 3.6 * Math.PI / 180);
      ctx.beginPath();
      ctx.moveTo(0, -(width / 2 - 25));
      ctx.lineTo(0, -(width / 2 - 40));
      ctx.stroke();
      ctx.closePath();
      ctx.restore();
    }
    
    ctx.setFillStyle('red')
    ctx.setFontSize(50)
    ctx.setTextBaseline('middle')
    ctx.setTextAlign('center')
    ctx.fillText(value+'%', width / 2, height / 2)

    ctx.translate(width / 2, height / 2);
    ctx.beginPath(); //画笔开始
    ctx.setLineWidth(1);     
    ctx.setStrokeStyle('green'); //设置画笔的颜色 
    ctx.arc(0, -R - 40, 4, 0, 2 * Math.PI, false); //绘制圆形，坐标250,250 半径200，整圆（0-360度），false表示顺时针 
    ctx.rotate((360 / (100 / value)) * Math.PI / 180);
    ctx.stroke(); //绘图    
    ctx.closePath(); //结束画布


    ctx.beginPath(); //画笔开始
    ctx.setLineWidth(1);
    ctx.setStrokeStyle('green'); //设置画笔的颜色 
    ctx.arc(0, -R - 15, 4, 0, 2 * Math.PI, false); //绘制圆形，坐标250,250 半径200，整圆（0-360度），false表示顺时针 
    //ctx.rotate((360 / (100 / value)) * Math.PI / 180);
    ctx.stroke(); //绘图    
    ctx.closePath(); //结束画布
   
    ctx.draw();
  }

})