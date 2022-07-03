//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    username: '',
    password: '',
  },
  
  inputUsername(e) {
    this.setData({
      username: e.detail.value,
    })
  },
  inputPassword(e) {
    this.setData({
      password: e.detail.value,
    })
  },
  login(){
    wx.navigateTo({
      url: '../message/message?message='+this.data.username,
    })

  }

})

