//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    username: '',
    password: '',
    animationlogo: {},
    animationpurpleC1:{},
    animationpurpleC2:{},
    animationredC:{},
    animationpinkC:{}
  },
  
  inputUsername(e) {
    this.setData({
      username: e.detail.value,
    })
  },
  inputPassword(e) {
    this.setData({
      password: e.detail.value,
    })
  },
  register(e){
    wx.navigateTo({
      url: '/pages/start/reg/reg',
    })
  },
  login(e){
    wx.navigateTo({
      url: '/pages/babez/babez',
    })
  },

  onShow: function(){
    var animation1 = wx.createAnimation({
      duration: 2000,
      timingFunction: 'linear',
    })
    var animation2 = wx.createAnimation({
      duration: 2000,
      timingFunction: 'linear',
    })
    var animation3 = wx.createAnimation({
      duration: 2000,
      timingFunction: 'linear',
    })
    var animation4 = wx.createAnimation({
      duration: 2000,
      timingFunction: 'linear',
    })
    var animation5 = wx.createAnimation({
      duration: 700,
      timingFunction: 'linear',
    })
    this.animation = animation1
    setTimeout(function() {
      animation1.translate(-100,100).step()
      this.setData({
        animationpurpleC1:animation1.export()
      })
    }.bind(this), 200)
    this.animation = animation2
    setTimeout(function() {
      animation2.translate(20,-400).step()
      this.setData({
        animationpurpleC2:animation2.export()
      })
    }.bind(this), 200)
    this.animation = animation3
    setTimeout(function() {
      animation3.translate(-70,0).step()
      this.setData({
        animationredC:animation3.export()
      })
    }.bind(this), 200)
    this.animation = animation4
    setTimeout(function() {
      animation4.translate(-80,-450).step()
      this.setData({
        animationpinkC:animation4.export()
      })
    }.bind(this), 200)
    this.animation = animation5
    setTimeout(function() {
      animation5.scale(0.7,0.7).step()
      this.setData({
        animationlogo:animation5.export()
      })
    }.bind(this), 200)
  },
})

