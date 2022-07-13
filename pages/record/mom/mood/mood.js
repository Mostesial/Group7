// pages/record/mom/mood/mood.js
const app = getApp();
Page({
  data: {
    date: "请输入日期",
  },
  // 事件处理函数
  BackToBaby(){
    wx.switchTab({
      url: '/pages/record/recordmom',
    })
  },
  queding(){
    wx.switchTab({
      url: '/pages/record/recordmom',
    })
  },
  chosemood(e){ 
    wx.setStorageSync('Mood', e.currentTarget.dataset.id)
    app.globalData.mom.mood=e.currentTarget.dataset.id
    console.log('选择的心情是:'+app.globalData.mom.mood)
  },
  DateChange(e) {
    this.setData({
      date: e.detail.value
    })
  },
  onShareAppMessage() {

  }
})
