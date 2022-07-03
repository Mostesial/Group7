// pages/index/index.js
Page({
  data: {
    animationData1: {},
    animationData2: {},
    animationData3: {},
    animationData4: {},
    animationData5: {},
    animationData6: {}
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
    var animation5 = wx.createAnimation({
      duration: 700,
      timingFunction: 'linear',
    })
    var animation6 = wx.createAnimation({
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
      animation2.translate(0,200).step()
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
    this.animation = animation5
    setTimeout(function() {
      animation5.scale(0.6,0.6).opacity(1).step()
      this.setData({
        animationData5:animation5.export()
      })
    }.bind(this), 200)
    this.animation = animation6
    setTimeout(function() {
      animation6.translate(0,-120).step()
      this.setData({
        animationData6:animation6.export()
      })
    }.bind(this), 0)
  },
})

