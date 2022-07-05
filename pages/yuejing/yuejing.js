const app = getApp();
Page({
  data: {
    time: '请选择时间',
    date: '请选择日期',
    date1:'请选择日期',
    TabCur: 0,
    TabCur1:0,
    scrollLeft:0,
    select: false,
    yuejingliang: '多',
    tongjing:'无痛感'
  },
  
  queding(){
    wx.redirectTo({
      url:"/pages/record1/record1",
    })
  },
  DateChange(e) {
    this.setData({
      date: e.detail.value
    })
  },
  DateChange1(e) {
    this.setData({
      date1: e.detail.value
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
  
//   生命周期函数--监听页面加载
    onLoad: function (options) {},

    bindShowMsg() {
         this.setData({
             select:!this.data.select
         })
    },

    bindShowMsg1() {
        this.setData({
            select1:!this.data.select1
        })
   },

    mySelect(e) {
        var name = e.currentTarget.dataset.name
        this.setData({
            yuejingliang: name,
            select: false
        })
    },

    mySelect1(e) {
        var name = e.currentTarget.dataset.name
        this.setData({
            tongjing: name,
            select1: false
        })
    },
 
    // 用户点击右上角分享
    onShareAppMessage: function () {}
})