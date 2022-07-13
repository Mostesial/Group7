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
    tongjing:'无痛感',
    yuejingList:[]
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
        content: '未选择起始日期无法保存',
        cancelText: '取消',
        confirmText: '确定',
      }); 
    } else if(this.data.date1=='请选择日期'){
      wx.showModal({
        title: '亲爱的用户',
        content: '未选择结束时间无法保存',
        cancelText: '取消',
        confirmText: '确定',
      }); 
    } else{
    var that = this
    var yuejingList = that.data.yuejingList
    yuejingList.push({
      date:that.data.date,
    })
    that.setData({
      yuejingList: this.data.yuejingList,
      date:""
    })
    this.save()

    wx.switchTab({
      url: '/pages/record/recordmom',
    })}
  },
  
  nodelete: function (e) {
    this.data.yuejingList.splice(e.currentTarget.dataset.index, 1)
    this.setData({
      yuejingList: this.data.yuejingList
    })
    this.save()
  },
  save:function(){
    wx.setStorageSync('yuejingList', this.data.yuejingList)
  },

  DateChange(e) {
    var that=this
    this.setData({
      date: e.detail.value
    })
    this.save()
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
  onLoad: function (options) {
    var yjnolist = wx.getStorageSync('yuejingList')
    if (yjnolist) {
      this.setData({
        yuejingList: yjnolist
      })
    }
  },

  save:function(){
    wx.setStorageSync('yuejingList', this.data.yuejingList)
  },

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