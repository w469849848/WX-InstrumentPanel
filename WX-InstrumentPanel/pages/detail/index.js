// pages/detail/detail1.js
var wxCharts = require('../../utils/wxcharts.js');
var pieChart = null;
var lineChart = null;
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  touchHandler11: function (e) {
    console.log(pieChart.getCurrentDataIndex(e));
    lineChart.showToolTip(e, {
       background: '#7cb5ec'
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let windowWidth = 320;
    try {
      let res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      // do something when get system info failed
    }
     /**
    * pieCanvas
    */
    pieChart = new wxCharts({
      canvasId: 'pieCanvas',
      type: 'pie',
      animation:true,
      series: [{
        name: 'cat1',
        data: 50,
      }, {
        name: 'cat2',
        data: 30,
      }, {
        name: 'cat3',
        data: 1,
      }, {
        name: 'cat4',
        data: 1,
      }, {
        name: 'cat5',
        data: 46,
      }],
      extra: {
        pie: {
          offsetAngle: -90
        }
      },
      legend:false,
      width: windowWidth,
      height: 200,
      dataLabel: true,
      dataPointShape :false,
      disablePieStroke :true
    });
    /**
    * ringCanvas
    */
    new wxCharts({
      canvasId: 'ringCanvas',
      type: 'ring',
      legend: false,
      dataPointShape: false,
      disablePieStroke: true,
      extra: {
        ringWidth : 20,
        pie: {
          offsetAngle: -90
        }
      },
      title:{
        name:'aaa',
        fontSize:20,
        color:'#000000'
      },
      series: [{
        name: '成交量1',
        data: 15,
      }, {
        name: '成交量2',
        data: 35,
      }, {
        name: '成交量3',
        data: 78,
      }, {
        name: '成交量4',
        data: 63,
      }],
      width: windowWidth,
      height: 200,
      dataLabel: true
    });
    /**
    * lineCanvas
    */
    lineChart = new wxCharts({
      canvasId: 'lineCanvas',
      type: 'line',
      categories: ['2012', '2013', '2014', '2015', '2016', '2017'],
      series: [{
        name: '成交量1',
        data: [0.15, 0.2, 0.45, 0.37, 0.4, 0.8],
        format: function (val) {
          return val.toFixed(2) + '万';
        }
      }, {
        name: '成交量2',
        data: [0.30, 0.37, 0.65, 0.78, 0.69, 0.94],
        format: function (val) {
          return val.toFixed(2) + '万';
        }
      }],
      yAxis: {
        title: '成交金额 (万元)',
        format: function (val) {
          return val.toFixed(2);
        },
        min: 0
      },
      width: windowWidth,
      height: 200,
      dataLabel: true
    });
    /**
    * curvelineCanvas
    */
    new wxCharts({
      canvasId: 'curvelineCanvas',
      type: 'line',
      extra: {
        lineStyle: 'curve'
      },
      categories: ['2012', '2013', '2014', '2015', '2016', '2017'],
      series: [{
        name: '成交量1',
        data: [0.15, 0.2, 0.45, 0.37, 0.4, 0.8],
        format: function (val) {
          return val.toFixed(2) + '万';
        }
      }, {
        name: '成交量2',
        data: [0.30, 0.37, 0.65, 0.78, 0.69, 0.94],
        format: function (val) {
          return val.toFixed(2) + '万';
        }
      }],
      yAxis: {
        title: '成交金额 (万元)',
        format: function (val) {
          return val.toFixed(2);
        },
        min: 0
      },
      width: windowWidth,
      height: 200,
      dataLabel: true
    });
    /**
    * columnCanvas
    */
    new wxCharts({
      canvasId: 'columnCanvas',
      type: 'column',
      categories: ['2012', '2013', '2014', '2015', '2016', '2017'],
      series: [{
        name: '成交量1',
        data: [15, 20, 45, 37, 4, 80]
      }, {
        name: '成交量2',
        data: [70, 40, 65, 100, 34, 18]
      }],
      yAxis: {
        format: function (val) {
          return val + '万';
        }
      },
      extra:{
        column:{
          width :100
        }
      },
      width: windowWidth,
      height: 200,
      dataLabel: true
    });
    /**
    * areaCanvas
    */
    new wxCharts({
      canvasId: 'areaCanvas',
      type: 'area',
      categories: ['2016-08', '2016-09', '2016-10', '2016-11', '2016-12', '2017'],
      extra: {
        lineStyle: 'curve'
      },
      series: [{
        name: '成交量1',
        data: [70, 40, 65, 100, 34, 18],
        format: function (val) {
          return val.toFixed(2) + '万';
        }
      }, {
        name: '成交量2',
        data: [15, 20, 45, 37, 4, 80],
        format: function (val) {
          return val.toFixed(2) + '万';
        }
      }],
      yAxis: {
        format: function (val) {
          return val + '万';
        }
      },
      width: windowWidth,
      height: 200,
      dataLabel: true
    });
    /**
    * radarCanvas
    */
    new wxCharts({
      canvasId: 'radarCanvas',
      type: 'radar',
      categories: ['1', '2', '3', '4', '5', '6'],
      series: [{
        name: '成交量1',
        data: [90, 110, 125, 95, 87, 122]
      }, {
        name: '成交量2',
        data: [40, 120, 115, 65, 97, 102]
      }
      ],
      width: windowWidth,
      height: 200,
      dataLabel: true,
      extra: {
        radar: {
          max: 200
        }
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})