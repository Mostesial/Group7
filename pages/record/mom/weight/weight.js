const app = getApp();
Page({
  data: {
    time: '请选择时间',
    date: '请选择日期',
    WEIGHT:'',
    TabCur: 0,
    TabCur1:0,
    scrollLeft:0,
    ValueList5: [],
    ValueList6: [],
  },
  onLoad: function (options) {
    var nolist5 = wx.getStorageSync('ValueList5')
    if (nolist5) {
      this.setData({
        ValueList5: nolist5
      })
    }
    var nolist6 = wx.getStorageSync('ValueList6')
    if (nolist6) {
      this.setData({
        ValueList6: nolist6
      })
    }
  },
  inputWeight: function (e) {
    var that = this
    that.setData({
      WEIGHT: e.detail.value
    })
    this.save()
  },
  DateChange:function (e)  {
    var that = this
    that.setData({
      date: e.detail.value
    })
  },
  nodelete: function (e) {
    this.data.ValueList5.splice(e.currentTarget.dataset.index, 1)
    this.setData({
      ValueList5: this.data.ValueList5
    })
    this.data.ValueList6.splice(e.currentTarget.dataset.index, 1)
    this.setData({
      ValueList6: this.data.ValueList6
    })
    this.save()
  },
  save:function(){
    wx.setStorageSync('ValueList5', this.data.ValueList5)
    wx.setStorageSync('ValueList6', this.data.ValueList6)
  },
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
    }  else{
    var that=this
    var ValueList5 = that.data.ValueList5
    ValueList5.push({
      WEIGHT: that.data.WEIGHT
    })
    that.setData({
      ValueList5: this.data.ValueList5,
      WEIGHT: ""
    })
    var ValueList6 = that.data.ValueList6
    ValueList6.push({
      date: that.data.date
    })
    that.setData({
      ValueList6: this.data.ValueList6,
      date: ""
    })
    for (var i = 0; i < ValueList6.length - 1; i++) {
      for (var j = 0; j < ValueList6.length - i - 1; j++) {
        // 1.对每一个值和它的下一个值进行比较
        if (ValueList6[j].date> ValueList6[j + 1].date) {
          // 如果第一个值更多，则将其赋予自定义计数值 count
           var count = ValueList6[j]
           var count2 = ValueList5[j]
            // 反复交换
          ValueList6[j] = ValueList6[j + 1]
          ValueList6[j + 1] = count
          ValueList5[j] = ValueList5[j + 1]
          ValueList5[j + 1] = count2
         }
      }
    } 
   console.log(ValueList6)
   console.log(ValueList5)
   this.save()
 var i=0
 app.globalData.mom.WEIGHT.length=ValueList6.length
 app.globalData.mom.date.length=ValueList6.length
 while(i<ValueList5.length){
    app.globalData.mom.WEIGHT[i]=ValueList5[i].WEIGHT
    app.globalData.mom.date[i]=ValueList6[i].date
  i++}
    console.log(app.globalData.mom.WEIGHT)
    console.log(app.globalData.mom.date)
    wx.switchTab({
      url: '/pages/record/recordmom',
    })
  }},
  onShareAppMessage() {

  }
})