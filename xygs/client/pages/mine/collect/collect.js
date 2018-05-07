// pages/mine/pubInfor/pubInfor.js
var util = require('../../../utils/util.js');

Page({
  // <navigator url= 'pubInfor/pubInfor' > 发布的信息 < /navigator>
  /**
   * 页面的初始数据
   */
  data: {
    bol: 1,
    blocks: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 调用函数时，传入new Date()参数，返回值是日期和时间  
    var time = util.formatTime(new Date());
    // 再通过setData更改Page()里面的data，动态更新页面的数据 
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var hourMinute = hour + ':' + minute;
    // 发送请求
    var that = this
    wx.request({
      url: util.APP_HOST + 'my/findfav',
      method: 'get',
      success: function (res) {
        console.log(res.data.freeBusinessesList)
        that.setData({
          blocks: res.data.freeBusinessesList
        })
      }
    })
    this.setData({
      time: time,
      hourMinute: hourMinute
    });
    console.log(this.data.hourMinute);
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