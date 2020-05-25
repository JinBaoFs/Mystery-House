//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    bannerImgList:['https://7072-prod-e3wgf-1302240362.tcb.qcloud.la/banner1.jpg?sign=e92dc7ebb88724852e80bf4f51bb5c64&t=1590393990','https://7072-prod-e3wgf-1302240362.tcb.qcloud.la/banner2.jpg?sign=e06a3abc43bc983552578ace6cef6675&t=1590394100','https://7072-prod-e3wgf-1302240362.tcb.qcloud.la/banner3.jpg?sign=1473dd5c8fb5740221094b321db4b908&t=1590394250']
  },

  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
