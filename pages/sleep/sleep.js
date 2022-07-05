// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    date: '2022-07-02',
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