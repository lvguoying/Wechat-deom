// pages/free/exchange/exchange.js
Page({
  data:{
    class: ''
  },
  toNavigate: function () {
    
    wx.navigateTo({
      url: '../address/address',
    })
  },
  changeColor: function(){
    wx.showModal({
      title: '确认兑换',
      content: '',
      success: function(){
        wx.navigateTo({
          url: '../address/address',
        })
      }
    })
  }
})