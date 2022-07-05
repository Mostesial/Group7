// pages/record/mom/mood/mood.js
Page({
  data: {
    date: '2022-07-02',
  },
  // 事件处理函数
  DateChange(e) {
    this.setData({
      date: e.detail.value
    })
  },
})
