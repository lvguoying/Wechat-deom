// pages/mine/home/home.js
var util = require('../../../utils/util.js');
Page({
  data: {
    // name: '',
    // cont: '',
    // arr : []

    // 用户信息
    userInfo:null,
    // 用户实力照片列表
    imgList: [1,2,3,4],
    // 用户发布信息列表
    postList: [],
  },
  onLoad: function(){
    var that = this;
    var userId = 2;
    wx.showLoading({
      title: "加载中...."
    });
    // 获取用户信息
    wx.request({
      url: util.APP_HOST + 'wuser/selectwuserbyuserid',
      data:{
        userId
      },
      success(res) {
        // 获取用户实力照片列表
        // var imgList = res.data.wuser.clientClient.split(',');
        that.setData({
          userInfo: res.data.wuser,
          // imgList,
        });

        console.log(res.data);
      }
    });
    wx.request({
      url: util.APP_HOST + 'freebusiness/findfreebus',
      data: {},
      success(res) {
        console.log(res.data.freeBusinessesList);
        var filterList = res.data.freeBusinessesList.concat();
        filterList.forEach(function(item) {
          if(item.update_time){
            item.update_time = item.update_time.split(" ")[0]
          }else if(item.create_time){
            item.create_time = item.create_time.split(" ")[0]
          }
        });
        that.setData({
          postList:filterList
        });
        wx.hideLoading();
      }
    });
    // 获取用户发布信息列表
    // wx.request({

    // });
    // var that = this;
    // wx.request({
    //   url: 'http://192.168.99.190:60001/FreeBusiness/findFreeBus?fb_id=65',
    //   success: function (res) {
    //     that.setData({
    //       name: res.data.freeBusinessesList[0].brand,
    //       cont: res.data.freeBusinessesList[0].category,
    //       arr: res.data.freeBusinessesList
    //     })
    //     console.log(res.data.freeBusinessesList[0].brand);
    //   }
    // })
  },
  fellow: function(){
    wx.showToast({
      title: '关注成功',
      icon: 'success',
      duration: 1000
    })
  },
  call: function(){
    wx.makePhoneCall({
      phoneNumber: '111-1111-1111',
      success: function(){
        
      }
    })
  }  
})