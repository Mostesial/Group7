// pages/record/baby/excrete/excrete.js
const app = getApp();
Page({
  data: {
    time: '请选择时间',
    date: '请选择日期',
    TabCur: 0,
    TabCur1:0,
    scrollLeft:0
  },
  queding(){
    wx.redirectTo({
      url:"/pages/record1/record1",
    })
  },
  TimeChange(e) {
    this.setData({
      time: e.detail.value
    })
  },
  DateChange(e) {
    this.setData({
      date: e.detail.value
    })
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id-1)*60,
    })
  },
  tabSelect1(e) {
    this.setData({
      TabCur1: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id-1)*60,
    })
  },
})