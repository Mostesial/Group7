//index.js
//获取应用实例
const app = getApp()

//获取当前时间（在两个横杠之间）
//========================================================================
const formatTime = date => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
  
    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
  }
  
  const formatNumber = n => {
    n = n.toString()
    return n[1] ? n : '0' + n
  }
  
  module.exports = {
    formatTime: formatTime
  }  
//========================================================================

Page({
  data: {
    check: 0, //判断是否打勾，初始默认为0，未打勾
    date:'请输入日期',
    when: '请输入时间', 
    where:'',
    what:'',
    ValueList: []
  },
  // 初始化
  onLoad: function (options) {
    var nolist = wx.getStorageSync('ValueList')
    if (nolist) {
      this.setData({
        ValueList: nolist
      })
    }
    this.save()

    //动态获取当前时间
    // 调用函数时，传入new Date()参数，返回值是日期和时间
    var time = formatTime(new Date());
    // 再通过setData更改Page()里面的data，动态更新页面的数据
    this.setData({
      time: time
    });
  },

  bindDateChange: function (e) {
    var that = this
    that.setData({
      date: e.detail.value
    })
    this.save()
  },
  bindTimeChange: function (e) {
    var that = this
    that.setData({
      when: e.detail.value
    })
    this.save()
  },
  inputwhere: function (e) {
    var that = this
    that.setData({
      where: e.detail.value
    })
    this.save()
  },
  inputwhat: function (e) {
    var that = this
    that.setData({
      what: e.detail.value
    })
    this.save()
  },

  addsearch: function (e) {
    var that = this
    var ValueList = that.data.ValueList
   this.save()
    ValueList.push({
      check: that.data.check,
      date: that.data.date,
      when: that.data.when,
      where: that.data.where,
      what: that.data.what
    })
    
    that.setData({
      ValueList: this.data.ValueList,
      check: 0,
      date: "请输入地点",
      when: "请输入时间",
      where: "",
      what: ""
    })
    this.save()
  },

  //完成事件打勾
  done: function(e){
    var index = e.currentTarget.dataset.index
    var ValueList = this.data.ValueList
    this.data.ValueList[index].check = !this.data.ValueList[index].check
    this.setData({
        ValueList: this.data.ValueList
    })
    this.save()
  },

  // 未完成点击删除
  nodelete: function (e) {
    this.data.ValueList.splice(e.currentTarget.dataset.index, 1)
    this.setData({
      ValueList: this.data.ValueList
    })
    this.save()
  },

  //存储
  save:function(){
    wx.setStorageSync('ValueList', this.data.ValueList)
  },

  back(e){
    wx.switchTab({
      url: '/pages/remind/remind',
    })
  },
  onShareAppMessage() {

  }
})

