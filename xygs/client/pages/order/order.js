// pages/order/order.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    multiIndex: [0, 0, 0],
    date: '2016-09-01',
    time: '12:01',
    region: ['黑龙江', '哈尔滨市', '宁安县'],
    customItem: '全部',
    bol:true,
    bloo:true,
    select:'玉米',
    orderym:[
      {
        "ym":"玉米订单",
        "zl":"中粮订单",
        "dq":"牡丹江合作社",
        "pl":"玉米",
        "cl":"12000吨/亩"
      },
      {
        "ym":"玉米订单",
        "zl":"中粮订单",
        "dq":"牡丹江合作社",
        "pl":"玉米",
        "cl":"12000吨/亩"
      },
      {
        "ym":"玉米订单",
        "zl":"中粮订单",
        "dq":"牡丹江合作社",
        "pl":"玉米",
        "cl":"12000吨/亩"
      },
      {
        "ym":"玉米订单",
        "zl":"中粮订单",
        "dq":"牡丹江合作社",
        "pl":"玉米",
        "cl":"12000吨/亩"
      }
    ],
  },
  selectKind:function(order){ 



   var  str = order.target.dataset.crop
    var orderym=[
      {
        "ym":`${str}订单`,
        "zl":"中粮订单",
        "dq":"牡丹江合作社",
        "pl":`${str}`,
        "cl":"1000吨/亩"
      },
      {
        "ym":`${str}订单`,
        "zl":"中粮订单",
        "dq":"牡丹江合作社",
        "pl":`${str}`,
        "cl":"4500吨/亩"
      },
      {
        "ym":`${str}订单`,
        "zl":"中粮订单",
        "dq":"牡丹江合作社",
        "pl":`${str}`,
        "cl":"7200吨/亩"
      },
      {
        "ym":`${str}订单`,
        "zl":"中粮订单",
        "dq":"牡丹江合作社",
        "pl":`${str}`,
        "cl":"7200吨/亩"
      },
      {
        "ym":`${str}订单`,
        "zl":"中粮订单",
        "dq":"牡丹江合作社",
        "pl":`${str}`,
        "cl":"7200吨/亩"
      }
    ];

      this.setData({
        orderym,
        select: str
        
      })
      
    },
  close: function(){
    var bol = this.data.bol;
    this.setData({
      bol:!bol
    })
  },
  change: function(){
    var boll = this.data.boll;
    this.setData({
      boll:!boll
    })
  },
  bindRegionChange: function (e) {
    this.setData({
      region: e.detail.value
    })
  }

})