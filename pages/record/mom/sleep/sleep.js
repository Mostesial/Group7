// pages/record/mom/sleep/sleep.js
const app = getApp()

Page({
  data: {
    date: "请输入日期",
    time1: '00:00',
    time2: '24:00',
  },
  // 事件处理函数
  DateChange(e) {
    this.setData({
      date: e.detail.value
    })
  },

  TimeChange1(e) {
    this.setData({
      time1: e.detail.value
    })
  },
  TimeChange2(e) {
    this.setData({
      time2: e.detail.value
    })
  },
})