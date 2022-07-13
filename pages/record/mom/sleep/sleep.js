// pages/record/mom/sleep/sleep.js
const app = getApp()

Page({
  data: {
    MSList:[],
    date: "请选择日期",
    time:'',
  },
  onLoad: function (options) {
    var msnolist = wx.getStorageSync('MSList')
    if (msnolist) {
      this.setData({
        MSList: msnolist
      })
    }
  },
  // 事件处理函数
  BackToBaby(){
    wx.switchTab({
      url: '/pages/record/recordmom',
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
    } else if(this.data.time==''){
      wx.showModal({
        title: '亲爱的用户',
        content: '未输入睡眠时长无法保存',
        cancelText: '取消',
        confirmText: '确定',
      }); 
    } else{
    var that = this
    var MSList = that.data.MSList
    MSList.push({
      date:that.data.date,
      time:that.data.time,
    })
    that.setData({
      MSList: this.data.MSList,
      date:"",
      time:"",
    })
    this.save()
    wx.switchTab({
      url: '/pages/record/recordmom',
    })}
  },
  
  nodelete: function (e) {
    this.data.MSList.splice(e.currentTarget.dataset.index, 1)
    this.setData({
      MSList: this.data.MSList
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
  InputTime(e){
    var that=this
    this.setData({
      time: e.detail.value
    })
    this.save()
  },
  
  save:function(){
    wx.setStorageSync('MSList', this.data.MSList)
  },
  onShareAppMessage() {

  }
})