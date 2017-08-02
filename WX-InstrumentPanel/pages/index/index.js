//index.js
//获取应用实例
var app = getApp()
var that;
var deltaX = 0;
var minValue = 1;
Page({
  data: {
    width: 0,
    height: 0,
    timeArry:['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24']
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
		  url: '../morePages/morePages'
		})
  },
  onLoad: function (options) {
    var that = this;
    app.globalData.isNoBind = false;
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    });
    
    //获取系统信息  
    wx.getSystemInfo({
      //获取系统信息成功，将系统窗口的宽高赋给页面的宽高  
      success: function (res) {
      	console.log(res);
        that.width = res.windowWidth
        // console.log(that.width)   375
        that.height = res.windowHeight*0.7*0.8;
        console.log(that.height)
        // 这里的单位是PX，实际的手机屏幕有一个Dpr，这里选择iphone，默认Dpr是2
      }
    })
  },
  onReady: function () {
    this.drawMeter('Temp','30','40');
    this.drawTarget('filter','65','100');
    this.drawTarget('fishFood','38','100');
    this.drawTarget('PH','41','100');
  },
  // 所有的canvas属性以及Math.sin,Math.cos()等涉及角度的参数都是用弧度表示
  // 温度仪表盘
  drawMeter: function (name,value,maxvalue) {
    const ctx = wx.createCanvasContext(name);
    var width = this.width;
    var height = this.height;
    var R = width / 2 - 90;
    console.log(width + '.....' + height);
    ctx.clearRect(0, 0, width, height); //清除画布   
    
    //绘制圆
    ctx.beginPath(); //画笔开始            
    ctx.setLineWidth(2); //设置画笔的线宽    
    ctx.setStrokeStyle('#576e87'); //设置画笔的颜色
    ctx.setLineCap('round');
    ctx.arc(width / 2, height / 2, R, 1.5 * Math.PI, 3.5 * Math.PI, false); //绘制圆形，坐标250,250 半径200，整圆（0-360度），false表示顺时针     
    ctx.stroke(); //绘图
    ctx.closePath(); //结束画布 
   
    //绘制value值的弧度
    ctx.setLineWidth(2); //设置画笔的线宽 
    ctx.beginPath(); //画笔开始           
    ctx.setLineJoin('round');
    ctx.setStrokeStyle('#04e7f9'); //设置画笔的颜色
    ctx.arc(width / 2, height / 2, R, 1.5 * Math.PI, (value * 2 / maxvalue + 1.5) * Math.PI, false); //绘制圆形，坐标250,250 半径200，整圆（0-360度），false表示顺时针     
    ctx.stroke(); //绘图            
    ctx.closePath(); //结束画布   
		
		
		
    //圆形外面刻度               
    for (var i = 0; i < maxvalue; i++) {
      ctx.save();
      ctx.setLineWidth(2);
      ctx.setStrokeStyle('#33dad9');
      if (i > value) {
        ctx.setStrokeStyle('#1c2d39');
      }else if(i == 1){
      	ctx.setStrokeStyle('#32e0dc');
      }
      else if(i == 2){
      	ctx.setStrokeStyle('#2fddd5');
      }
      else if(i == 3){
      	ctx.setStrokeStyle('#2ae2d5');
      }
      else if(i == 4){
      	ctx.setStrokeStyle('#26e2d0');
      }
      else if(i == 5){
      	ctx.setStrokeStyle('#25e5cc');
      }
      else if(i == 6){
      	ctx.setStrokeStyle('#25e4c5');
      }
      else if(i == 7){
      	ctx.setStrokeStyle('#25e7c1');
      }
      else if(i == 8){
      	ctx.setStrokeStyle('#25e4b8');
      }
      else if(i == 9){
      	ctx.setStrokeStyle('#25e7b2');
      }
      else if(i == 10){
      	ctx.setStrokeStyle('#25e7a9');
      }
      else if(i == 11){
      	ctx.setStrokeStyle('#28e79f');
      }
      else if(i == 12){
      	ctx.setStrokeStyle('#35e08e');
      }
      else if(i == 13){
      	ctx.setStrokeStyle('#49e782');
      }
      else if(i == 14){
      	ctx.setStrokeStyle('#61e770');
      }
      else if(i == 15){
      	ctx.setStrokeStyle('#79e65e');
      }
      else if(i == 16){
      	ctx.setStrokeStyle('#94e54a');
      }
      else if(i == 17){
      	ctx.setStrokeStyle('#a9de38');
      }
      else if(i == 18){
      	ctx.setStrokeStyle('#c7e127');
      }
      else if(i == 19){
      	ctx.setStrokeStyle('#d9d91a');
      }
      else if(i == 20){
      	ctx.setStrokeStyle('#efd70d');
      }
      else if(i == 21){
      	ctx.setStrokeStyle('#fece03');
      }
      else if(i == 22){
      	ctx.setStrokeStyle('#f7c905');
      }
      else if(i == 23){
      	ctx.setStrokeStyle('#fbb904');
      }
      else if(i == 24){
      	ctx.setStrokeStyle('#f9a004');
      }
      else if(i == 25){
      	ctx.setStrokeStyle('#ff8504');
      }
      else if(i == 26){
      	ctx.setStrokeStyle('#ff680c');
      }
      else if(i == 27){
      	ctx.setStrokeStyle('#fa4a15');
      }
      else if(i == 28){
      	ctx.setStrokeStyle('#fa4a15');
      }
      else if(i == 29){
      	ctx.setStrokeStyle('#f4321d');
      }
      else if(i == 30){
      	ctx.setStrokeStyle('#ef1f22');
      }
      else if(i == 31){
      	ctx.setStrokeStyle('#ef1c23');
      }
      else if(i == 32){
      	ctx.setStrokeStyle('#eb1d24');
      }
      
      ctx.translate(width / 2, height / 2);
      ctx.rotate(i * 2/maxvalue * Math.PI);//i * 360/maxvalue * Math.PI / 180
      ctx.beginPath();
      ctx.moveTo(0, -(R + 20));
      ctx.lineTo(0, -(R + 35));
      ctx.stroke();
      ctx.closePath();
      ctx.restore();
    }
		//设置中间字体
    ctx.setFillStyle('#3a5463');
    ctx.setFontSize(20);
    ctx.setTextAlign('center');
    ctx.fillText('水温', width / 2, height / 2-30);
    
    ctx.setFillStyle('#29ecfc');
    ctx.setFontSize(60);
    ctx.fillText(value, width / 2-20, height / 2+30);
    
    ctx.setFillStyle('#2ab0be');
    ctx.setFontSize(15);
    ctx.fillText('℃', width / 2+30, height / 2+5);
    
    ctx.setFillStyle('#9eb4ca');
    ctx.setFontSize(15);
    ctx.fillText('适宜', width / 2+30, height / 2+30);
		
		//起始值圆点
		ctx.translate(width / 2, height / 2);
    ctx.beginPath(); //画笔开始
    ctx.setLineWidth(1);
    ctx.setFillStyle('#29ecfc'); //设置画笔的颜色 
    ctx.arc(0, -R-50, 2, 0, 2 * Math.PI, false); //绘制圆形，坐标250,250 半径200，整圆（0-360度），false表示顺时针 
    ctx.stroke(); //绘图    
    ctx.fill();//填充
    //起始值（0℃）
    ctx.setFillStyle('#20323f');
    ctx.setFontSize(15);
    ctx.fillText('0℃', 0 / 2, -R-60);
    ctx.closePath(); //结束画布
		
		//value值圆点
    ctx.beginPath(); //画笔开始
    ctx.setLineWidth(1);
    ctx.setFillStyle('#29ecfc'); //设置画笔的颜色 
    ctx.arc(0, -R, 5, 0, 2 * Math.PI, false); //绘制圆形，坐标250,250 半径200，整圆（0-360度），false表示顺时针 
    ctx.rotate((360 / (maxvalue / value)) * Math.PI / 180);
    ctx.stroke(); //绘图    
    ctx.fill();//填充
    ctx.closePath(); //结束画布
		
		//value值外面的三个点
    ctx.beginPath(); //画笔开始
    ctx.setLineWidth(1);
    ctx.setStrokeStyle('#29ecfc'); //设置画笔的颜色 
    ctx.arc(0, -R-50, 2, 0, 2 * Math.PI, false); //绘制圆形，坐标250,250 半径200，整圆（0-360度），false表示顺时针 
    ctx.stroke(); //绘图    
    ctx.fill();//填充
    ctx.closePath(); //结束画布
		//value值外面的三个点
    ctx.beginPath(); //画笔开始
    ctx.setLineWidth(1);
    ctx.setStrokeStyle('#29ecfc'); //设置画笔的颜色 
    ctx.arc(0-10, -R-50, 1, 0, 2 * Math.PI, false); //绘制圆形，坐标250,250 半径200，整圆（0-360度），false表示顺时针 
    ctx.stroke(); //绘图    
    ctx.fill();//填充
    ctx.closePath(); //结束画布
    //value值外面的三个点
		ctx.beginPath(); //画笔开始
    ctx.setLineWidth(1);
    ctx.setStrokeStyle('#29ecfc'); //设置画笔的颜色 
    ctx.arc(0-20, -R-48, 0, 0, 2 * Math.PI, false); //绘制圆形，坐标250,250 半径200，整圆（0-360度），false表示顺时针 
    ctx.stroke(); //绘图    
    ctx.fill();//填充
    ctx.closePath(); //结束画布
    
    ctx.draw();
  },

	drawTarget:function(name,value,maxvalue){
		const ctx = wx.createCanvasContext(name);
		var width = this.width*0.33*0.8;//this.width*0.33*0.8;//this.width*0.25;
    var height = 80;
    var R = height / 2 - 5;
    console.log(width + '.....' + height + '.....' + R);
    ctx.clearRect(0, 0, width, height); //清除画布   
    //绘制圆
    ctx.beginPath(); //画笔开始            
    ctx.setLineWidth(2); //设置画笔的线宽    
    ctx.setStrokeStyle('#8cb1d5'); //设置画笔的颜色
    ctx.setLineCap('round');
    ctx.arc(width / 2, height / 2, R, 1.5 * Math.PI, 3.5 * Math.PI, false); //绘制圆形，坐标width / 2,height / 2 半径R，整圆（0-360度），false表示顺时针     
    ctx.stroke(); //绘图
    ctx.closePath(); //结束画布 
   
    //绘制value值的弧度
    ctx.setLineWidth(4); //设置画笔的线宽 
    ctx.beginPath(); //画笔开始           
    ctx.setLineJoin('round');//设置线条的交点样式
    ctx.setStrokeStyle('#9eb4ca'); //设置画笔的颜色
    ctx.arc(width / 2, height / 2, R - 2, 1.5 * Math.PI, (value * 2 / maxvalue + 1.5) * Math.PI, false); //绘制圆形，坐标width / 2,height / 2 半径R - 2，整圆（0-360度），false表示顺时针     
    ctx.stroke(); //绘图        
    ctx.closePath(); //结束画布  
    
    ctx.setFillStyle('#C7ECFA');
    ctx.setFontSize(18);
    ctx.setTextAlign('center');
    ctx.fillText(value, width / 2, height / 2-5);
    
    ctx.draw();
	}
})