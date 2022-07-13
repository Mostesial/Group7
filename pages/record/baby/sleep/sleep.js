// pages/record/baby/sleep/sleep.js
const app = getApp()

Page({
  data: {
    date: "请选择日期",
    time1: '00:00',
    time2: '24:00',
    BSList:[]
  },

  onLoad: function (options) {
    var bsnolist = wx.getStorageSync('BSList')
    if (bsnolist) {
      this.setData({
        BSList: bsnolist
      })
    }
  },

  // 事件处理函数
  BackToBaby(){
    wx.switchTab({
      url: '/pages/record/record',
    })
  },
  queding(){
    if(this.data.date=='请选择日期'){
      wx.showModal({
        title: '亲爱的用户',
        content: '未选择日期无法保存',
        cancelText: '取消',
        confirmText: '确定',
      }); 
    } else{
    var that = this
    var BSList = that.data.BSList
    BSList.push({
      date:that.data.date,
      time1:that.data.time1,
      time2:that.data.time2,
    })
    that.setData({
      BSList: this.data.BSList,
      date:"",
      time1:"00:00",
      time2:"24:00"
    })
    this.save()
    var i=BSList.length
    var j=0
    while(j<i){
      app.globalData.baby.smdate[j]=BSList[j].date
      app.globalData.baby.smtime1[j]=BSList[j].time1
      app.globalData.baby.smtime2[j]=BSList[j].time2
      j++
    }
    wx.switchTab({
      url: '/pages/record/record',
    })}
  },
  nodelete: function (e) {
    this.data.BSList.splice(e.currentTarget.dataset.index, 1)
    this.setData({
      BSList: this.data.BSList
    })
    this.save()
  },

  DateChange(e) {
    var that=this
    this.setData({
      date: e.detail.value
    })
    this.save()
  },
  TimeChange1(e) {
    var that=this
    this.setData({
      time1: e.detail.value
    })
    this.save()
  },
  TimeChange2(e) {
    var that=this
    this.setData({
      time2: e.detail.value
    })
    this.save()
  },
  save:function(){
    wx.setStorageSync('BSList', this.data.BSList)
  },
  onShareAppMessage() {

  }
})