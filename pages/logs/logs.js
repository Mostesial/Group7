// logs.js
Page({
  data: {
    sex:['妈妈','爸爸'],
    babysex:['男孩','女孩'],
    babytime:['32周','33周','34周','35周','36周','37周','38周','39周','40周','41周','42周','43周','44周','45周','46周','47周','48周'],
    index1:0,
    index2:0,
    index3:8,
    date:2022,
    animationData1: {},
    animationData2: {},
    animationData3: {},
    animationData4: {}
  },
  // 事件处理函数
  bindPickerChange1(e){
    console.log(e);
    this.setData({
      index1:e.detail.value
    })
  },
  bindPickerChange2(e){
    console.log(e);
    this.setData({
      index2:e.detail.value
    })
  },
  bindDateChange(e){
    console.log(e);
    this.setData({
      date:e.detail.value
    })
  },
  bindPickerChange3(e){
    console.log(e);
    this.setData({
      index3:e.detail.value
    })
  },
  onShow: function(){
    var animation1 = wx.createAnimation({
      duration: 1300,
      timingFunction: 'linear',
    })
    var animation2 = wx.createAnimation({
      duration: 1200,
      timingFunction: 'linear',
    })
    var animation3 = wx.createAnimation({
      duration: 1400,
      timingFunction: 'linear',
    })
    var animation4 = wx.createAnimation({
      duration: 1000,
      timingFunction: 'linear',
    })

    this.animation = animation1
    setTimeout(function() {
      animation1.translate(0,500).step()
      this.setData({
        animationData1:animation1.export()
      })
    }.bind(this), 300)
    this.animation = animation2
    setTimeout(function() {
      animation2.translate(0,100).step()
      this.setData({
        animationData2:animation2.export()
      })
    }.bind(this), 400)
    this.animation = animation3
    setTimeout(function() {
      animation3.translate(0,-200).step()
      this.setData({
        animationData3:animation3.export()
      })
    }.bind(this), 600)
    this.animation = animation4
    setTimeout(function() {
      animation4.translate(0,-350).step()
      this.setData({
        animationData4:animation4.export()
      })
    }.bind(this), 200)
  },
})
