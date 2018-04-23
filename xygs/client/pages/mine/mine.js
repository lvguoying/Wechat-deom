// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '斯坦森',
    status: '贸易商'
  },
  ToPubInfo: function () {
    wx.navigateTo({
      url: "pubInfor/pubInfor",
    })
  },
  goWuyang: function () {
    wx.showModal({
      title: '跳转到',
      content: '无央平台注册/登录',
      cancelText: '返回',
      confirmColor: '#1AAD19'
    })
  },
  phoneUs: function () {
    wx.makePhoneCall({
      phoneNumber: '18846444887',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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