const app = getApp();
Page({
  data: {
    HEIGHT:'',
    WEIGHT:'',
    TOUWEI:'',
    ValueList1: [],
    ValueList2: [],
    ValueList3: [],
    ValueList4: [],
    index: null,
    date: '请选择日期',
    imgList: [],
    shiyan:'',
    delete:false,
  },
  onLoad: function (options) {
    var nolist1 = wx.getStorageSync('ValueList1')
    var nolist2 = wx.getStorageSync('ValueList2')
    var nolist3 = wx.getStorageSync('ValueList3')
    var nolist4 = wx.getStorageSync('ValueList4')
    if (nolist1) {
      this.setData({
        ValueList1: nolist1
      })
    }
    if (nolist2) {
      this.setData({
        ValueList2: nolist2
      })
    }
    if (nolist3) {
      this.setData({
        ValueList3: nolist3
      })
    }
    if (nolist4) {
      this.setData({
        ValueList4: nolist4
      })
    }
  },
  inputHeight: function (e) {
    var that = this
    that.setData({
     HEIGHT: e.detail.value
    })
    this.save()
  },
  inputWeight: function (e) {
    var that = this
    that.setData({
      WEIGHT: e.detail.value
    })
    this.save()
  },
  inputTouwei: function (e) {
    var that = this
    that.setData({
      TOUWEI: e.detail.value
    })
    this.save()
  },
  DateChange:function (e){
    var that=this
    this.setData({
      date: e.detail.value
    })
    this.save()
  },
  nodelete: function (e) {
    this.data.ValueList1.splice(e.currentTarget.dataset.index, 1)
    this.setData({
      ValueList1: this.data.ValueList1
    })
    this.data.ValueList2.splice(e.currentTarget.dataset.index, 1)
    this.setData({
      ValueList2: this.data.ValueList2
    })
    this.data.ValueList3.splice(e.currentTarget.dataset.index, 1)
    this.setData({
      ValueList3: this.data.ValueList3
    })
    this.data.ValueList4.splice(e.currentTarget.dataset.index, 1)
    this.setData({
      ValueList4: this.data.ValueList4
    })
  },
  save:function(){
    wx.setStorageSync('ValueList1', this.data.ValueList1)
    wx.setStorageSync('ValueList2', this.data.ValueList2)
    wx.setStorageSync('ValueList3', this.data.ValueList3)
    wx.setStorageSync('ValueList4', this.data.ValueList4)
  },
  DelImg(e) {
    wx.showModal({
      title: '亲爱的用户',
      content: '确定要删除这张图片？',
      cancelText: '再看看',
      confirmText: '确定',
      success: res => {
        if (res.confirm) {
          this.data.imgList.splice(e.currentTarget.dataset.index, 1);
          this.setData({
            imgList: this.data.imgList
          })
        }
      }
    })
  },
  ChooseImage() {
    wx.chooseImage({
      count: 4, //默认9
      sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album'], //从相册选择
      success: (res) => {
        if (this.data.imgList.length != 0) {
          this.setData({
            imgList: this.data.imgList.concat(res.tempFilePaths)
          })
        } else {
          this.setData({
            imgList: res.tempFilePaths
          })
        }
      }
    });
  },
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
      var ValueList1 = that.data.ValueList1
      var ValueList2 = that.data.ValueList2
      var ValueList3 = that.data.ValueList3
      var ValueList4 = that.data.ValueList4
      ValueList1.push({
        HEIGHT: that.data.HEIGHT
      })
      ValueList2.push({
        WEIGHT: that.data.WEIGHT
      })
      ValueList3.push({
       TOUWEI: that.data.TOUWEI
      })
      ValueList4.push({
        date: that.data.date
       })
      that.setData({
        ValueList1: this.data.ValueList1,
        HEIGHT: ""
      })
      that.setData({
        ValueList2: this.data.ValueList2,
        WEIGHT: ""
      })
      that.setData({
        ValueList3: this.data.ValueList3,
        TOUWEI: ""
      })
      that.setData({
        ValueList4: this.data.ValueList4,
        date: ""
      })
      for (var i = 0; i < ValueList4.length - 1; i++) {
        for (var j = 0; j < ValueList4.length - i - 1; j++) {
          // 1.对每一个值和它的下一个值进行比较
          if (ValueList4[j].date> ValueList4[j + 1].date) {
            // 如果第一个值更多，则将其赋予自定义计数值 count
             var count4 = ValueList4[j]
             var count3 = ValueList3[j]
             var count2 = ValueList2[j]
             var count1 = ValueList1[j]
              // 反复交换
            ValueList4[j] = ValueList4[j + 1]
            ValueList4[j + 1] = count4
            ValueList3[j] = ValueList3[j + 1]
            ValueList3[j + 1] = count3
            ValueList2[j] = ValueList2[j + 1]
            ValueList2[j + 1] = count2
            ValueList1[j] = ValueList1[j + 1]
            ValueList1[j + 1] = count1
           }
        }
      } 
     console.log(ValueList4)
     console.log(ValueList3)
     console.log(ValueList2)
     console.log(ValueList1)
     this.save()
   var i=0
   app.globalData.baby.HEIGHT.length=ValueList1.length
   app.globalData.baby.WEIGHT.length=ValueList1.length
   app.globalData.baby.TOUWEI.length=ValueList1.length
   app.globalData.baby.date.length=ValueList1.length
   while(i<ValueList1.length){
      app.globalData.baby.HEIGHT[i]=ValueList1[i].HEIGHT
      app.globalData.baby.WEIGHT[i]=ValueList2[i].WEIGHT
      app.globalData.baby.TOUWEI[i]=ValueList3[i].TOUWEI
      app.globalData.baby.date[i]=ValueList4[i].date
    i++}
      console.log(app.globalData.baby.HEIGHT)
      console.log(app.globalData.baby.WEIGHT)
      console.log(app.globalData.baby.TOUWEI)
      console.log(app.globalData.baby.date)
      wx.switchTab({
      url: '/pages/record/record',
    })}
  },
  onShareAppMessage() {

  }
})